module.exports.handler = (evt, ctx, done) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'This message indicates lesson 1 was completed successfully! 😎',
            input: evt,
            context: ctx,
        })
    };

    console.log(response)
    done(null, 'hello!')
};
