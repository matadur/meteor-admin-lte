Package.describe({
  name: 'matadur:admin-lte',
  version: '0.0.4',
  summary: 'A fork of the AdminLTE dashboard theme by mfactory',
  git: 'https://github.com/matadur/meteor-admin-lte.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'templating',
    'reactive-var'
  ], 'client');

  api.addFiles([
    'admin-lte.html',
    'admin-lte.js'
  ], 'client');

  api.addFiles([
    'css/lib/normalize.css',
    'css/AdminLTE.min.css',
    'css/skins/skin-black-light.min.css',
    'css/skins/skin-black.min.css',
    'css/skins/skin-blue-light.min.css',
    'css/skins/skin-blue.min.css',
    'css/skins/skin-green-light.min.css',
    'css/skins/skin-green.min.css',
    'css/skins/skin-purple-light.min.css',
    'css/skins/skin-purple.min.css',
    'css/skins/skin-red-light.min.css',
    'css/skins/skin-red.min.css',
    'css/skins/skin-yellow-light.min.css',
    'css/skins/skin-yellow.min.css'
  ], 'client', { isAsset: true });
});
