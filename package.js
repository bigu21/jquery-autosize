Package.describe({
  summary: 'Automatically adjust textarea height based on user input.',
  version: '0.0.3',
  git: "https://github.com/bigu21/meteor-autosize.git",
  name: "bigu:autosize"
});

Package.on_use(function (api) {
  api.add_files(['vendor/autosize.min.js'], 'client');
});
