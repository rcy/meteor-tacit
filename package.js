Package.describe({
  name: 'tacit',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'CSS Framework for Dummies',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('tacit/dist/tacit-1.0.0.min.css','client');
});
