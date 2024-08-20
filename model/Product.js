import { connection as db } from '../config/index.js'

class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
            select productID, prodName, quantity, amount, category, prodUrl
            from Products
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Issue when retrieving all products.')
                    res.json({
                        status: res.statusCode,
                        results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.msg
            })
        }
    }
    
    fetchProduct(req, res) {
        try {
            const strQry = ` 
            select productID, prodName, quantity, amount, category, prodURL 
            from Products
            where productID = ${req.params.id}
            `
            db.query(strQry, (err, result) => {
                if(err) throw new Error(err.message)
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

    latestProducts(req, res) {
        try {
            const strQry = ` 
            select productID, prodName, quantity, amount, category, prodURL
            from Products order by productID  desc limit 3;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error(err.message)
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

    addProduct(req, res) {
        try {
            let data = req.body
            const strQry = `
            insert into Products
            set ?
            `
            db.query(strQry, [data], (err) => {
                if(err) throw new Error(err.message) 
                    res.json({
                        status: res.statusCode,
                        msg: "Product has been added successfully =]"
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    updateProduct(req, res) {
        try {
            let data = req.body
            const strQry = ` 
            update Products
            set ?
            where productID = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
                if (err) throw new Error('Unable to update products.')
                    res.json({
                        status: res.statusCode,
                        msg: 'Product details updated successfully 🔃.'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteProduct(req, res) {
        try {
            const strQry = `
            delete from Products
            where productID = ${req.params.id}
            `
            db.query(strQry, (err)  => {
                if(err) throw new Error('Unable to delete product')
                    res.json({
                        status: res.statusCode,
                        msg: 'Product information deleted successfully.'
                    })
            })
        } catch (e) {
            res.json({
                status: 404, 
                err: e.message
            })
        }
    }
}

export {
    Products
}