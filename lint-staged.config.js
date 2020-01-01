module.exports = {
  '*.{json,yaml,ts}': ['prettier --write', 'git add'],
  '*.js': ['prettier --write', 'git add'],
}
