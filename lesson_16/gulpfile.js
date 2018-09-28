var  gulp = require("gulp");
var bs = require("browser-sync");
var sass = require('gulp-sass');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var concatCss = require('gulp-concat-css')

// Запускаем сервер + отслеживаем sass/html файлы
gulp.task('serve', ['sass'], function() {

  bs.init({
   server: "./src"
  });

  gulp.watch("src/sass/*.sass", ['sass']);
  gulp.watch("src/*.html").on('change', bs.reload);
});

// Компилируем sass в CSS и вставляем изменения в браузер
gulp.task('sass', function() {
	return gulp.src("src/sass/**/*.sass")
		.pipe(sass())
		.pipe(concatCss("main.css"))
		.pipe(gulp.dest("src/css"))
		.pipe(bs.stream());
});

gulp.task('default', ['serve']);

// Выгружаем все файлы через FTP на хостинг
gulp.task( 'depl', function () {

	var conn = ftp.create( {
		host:     '88.99.94.73',
		user:     'kirso189',
		password: 'yQoL842Fun',
	} );

	var globs = [
		'src/**',
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/www/kirson123.ru/lesson_13' ) ) // only upload newer files
		.pipe( conn.dest( '/www/kirson123.ru/lesson_13' ) );

} );