var gulp = require('gulp'),
		sass = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync');



// Jade Task
// Converts Jade to HTML
gulp.task('jade', function(){
	gulp.src('templates/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('build/development'));
});


// Script Tasks
// Uglify or Minify
gulp.task('scripts', function(){
	gulp.src('scripts/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('scripts/minjs'));
});


// SASS & Autoprefixer
gulp.task('sass', function() {
  return sass('sass/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css/'))
});


//Browser Sync
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "scripts/*.js", './*.html'], {
        server: {
            baseDir: "./"
        }
    });
});


// Watch Task
gulp.task('watch', function(){
	gulp.watch('templates/*.jade', ['jade']);
	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('./*.html');
});

gulp.task('default', ['sass', 'watch', 'browser-sync']);


