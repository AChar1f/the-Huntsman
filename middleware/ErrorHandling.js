function errorHandling(err, req, res, next) {
    if (err || res.statusCode >= 400) {
        res.json(
            {
                staus: err.staus ||
                    res.statusCode || 500,
                err: "An error occurred =(. Please try again later."
            }
    )
    }
    next()
}

export {
    errorHandling
}