import { connection as db } from "../config/index.js"  
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication.js";

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `
                select userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile
                from Users;
                `
            db.query(strQry, (err, results) => {
              if (err) throw new Error(`Issue when retrieving all users`)
              res.json({
                status: res.statusCode,
                results 
              })
            })
          } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
          }
    }
    
    fetchUser(req, res) {
        try{
            const strQry = `
            select userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile
            from Users where userID = ${req.params.id};
            `
            db.query(strQry, (err, result) => {
              if (err) throw new Error(err.message)
              res.json({
            status: res.statusCode,
            result: result[0]
              })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }
    
    async registerUser(req, res) {
        try {
            let data = req.body
              data.userPass = await hash(data.userPass, 12)

            let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
            } 
            
            let strQry = `
            insert into  Users
            set ?;
            `
            db.query(strQry, [data], (err) => {
            if(err) {
                res.json({
                status: res.statusCode,
                msg: 'This email has already been taken'
            })
          } else {
            const token = createToken(user)
            res.json({
              token,
              msg: 'You are now registered'
            })
          }
         })   
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }

   async updateUser(req, res) {
        try {
            let data = req.body
            if (data.userPass) {
              data.userPass = await hash(data.userPass, 12)
            }
            const strQry = `
            update Users
            set ?
            where userID = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
              if (err) throw new Error('Unable to update user')
                res.json({
                  status: res.statusCode,
                  msg: 'User details updated successfully 🔃'
                })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }

    deleteUser(req, res) {
        try {
            const strQry = `
            delete from Users 
            where userID = ${req.params.id}
            `
            db.query(strQry, (err) => {
              if(err) throw new Error(' Ran into an issue while trying to  Delete User, please review the delete query.')
                res.json({
                  status: res.statusCode,
                  msg: 'Successfully deleted user\'s information.'
                })
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }

    login(req, res) {
        try {
            const {emailAdd, userPass} = req.body
            const strQry = `
            select userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile
            from Users
            where emailAdd = '${emailAdd}'                  
            `
            db.query(strQry, async (err, result) => {   
             //'Ran into issue when logging in, please review login query'           
              if(err) throw new Error(err)
              if(!result?.length) {
                res.json(
                  {
                    status: 401,
                    msg: 'Invalid email. Please provide a valid email or register.'
                  }
                )
              } else {
                const isValidPass = await compare 
                (userPass, result[0].userPass)
                if (isValidPass) {
                  const token = createToken({
                    emailAdd, userPass
                  })
                  res.json({
                      status: res.statusCode,
                      msg: "Login Successful. =)",
                    token,
                    result: result[0]
                  })
                } else {
                  res.json({
                    status: 401,
                    msg: 'Invalid Password. Please input correct password or register.'
                  })
                }
              }
            })
          } catch (e) {
            res.json({
              status: 404,
              msg: e.message
            })
          }
    }
}

export {
    Users
}