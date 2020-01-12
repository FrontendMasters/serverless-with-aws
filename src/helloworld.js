module.exports.handler = (evt, ctx, done) => {
  console.log(`${evt.message}`);
  done();
}
