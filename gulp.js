// webpack.mix.js

const mix = require('laravel-mix');

mix
    .sass('resources/assets/sass/all.scss', 'public/assets/css/all.css')
    .scripts(
        [
            // ... script files
        ],
        'public/assets/js/app.js'
    );

if (mix.inProduction()) {
    mix.sourceMaps().version();
}