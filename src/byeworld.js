module.exports.lambda = ( evt, ctx, callback ) => {
    const response = {
        statusCode: 200,
        body: {
            input: evt,
            context: ctx,
            message: 'bye!',
        }
    };
    console.log(response)
    callback(null, 'lambda has been invoked');
};
