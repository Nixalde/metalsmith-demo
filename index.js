var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var images = require('metalsmith-project-images');

Metalsmith(__dirname)
  .metadata({
    title: "Mi primera pagina estatica",
    description: "Hola mundo",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(images({
  	pattern: './*.jpeg'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
