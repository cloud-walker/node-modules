module.exports = {
  '*.{json,yaml,ts,md}': ['prettier --write', 'git add'],
  '*.js': ['prettier --write', 'git add'],
}
