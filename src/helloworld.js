// event , context, done
// done follows the NODE style response stuff
// context is meta information 
// event is the payload - whatever was sent to the lambda
'use strict';

module.exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World',
            input: event,
        }),
    };

    callback(null, response);
    // callback(null, event)
};
