module.exports.todos = (event, ctx, done) => {
  const todos = [
    {id: 1, name: 'clean up', status: 'open'},
    {id: 1, name: 'cook', status: 'done'}
  ];
  done(null, {
    statusCode: 200,
    body: JSON.stringify({data: todos})
  })
};
