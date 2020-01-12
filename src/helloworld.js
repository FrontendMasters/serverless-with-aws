module.exports.handler = (evt, ctx, done) => {
  done(new Error('failed'), evt.message);
}
