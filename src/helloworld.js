module.exports.handler = (evt, ctx, done) => {
  done(null, `${evt.message}, from LAMBDA!`)
}
