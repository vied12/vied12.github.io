var ghpages = require('gh-pages')

ghpages.publish('out', { branch: 'master', dotfiles: true }, function(err) {})
