const errorHandler = (error, request, response, next) => {

    const status = response.statusCode ? response.statusCode : 500;

    response.status(status);

    response.json({
        message : error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
}

module.exports = {
    errorHandler
}