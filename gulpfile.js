const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');
const postcssAssets = require('postcss-assets');
const browserSync = require('browser-sync');

// Define paths to your Sass files and where to output CSS
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/assets/css'
  }
};

// Compile Sass into CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError)) // Compile Sass to CSS
    .pipe(postcss([autoprefixer(), pxtorem(), postcssAssets(), cssnano()])) // Run PostCSS plugins
    .pipe(gulp.dest(paths.styles.dest)) // Output the result to the destination folder
    .pipe(browserSync.stream()); // Inject changes into the browser without a full reload
}

// A simple task to reload the page
function reload() {
  browserSync.reload();
}

// Watch changes and update in real-time
function watch() {
  // Initialize BrowserSync for serving the project
  browserSync.init({
    server: {
      baseDir: './' // Serve from the root directory
    }
  });

  // Watch Sass files and run the 'styles' task on change
  gulp.watch(paths.styles.src, styles);

  // Watch HTML files and reload the browser on change
  gulp.watch('dist/**/*.html').on('change', browserSync.reload);

  // Watch CSS files and reload the browser on change
  gulp.watch('dist/assets/css/*.css').on('change', browserSync.reload);

  // Watch JS files and reload the browser on change
  gulp.watch('src/**/*.js').on('change', browserSync.reload);
}

// Expose public tasks to the CLI
exports.styles = styles;
exports.watch = watch;

// Define default task that can be called by just running `gulp` from the CLI
exports.default = gulp.series(styles, watch); // Run the 'styles' task and then the 'watch' task in sequence
