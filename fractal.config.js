'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Société Mérimée');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/style-guide/patterns');
fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.njk');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/style-guide/docs');