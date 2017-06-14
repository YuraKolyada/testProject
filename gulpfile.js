var gulp = require('gulp'),
	browser = require('browser-sync').create(),
	sass = require('gulp-sass'),
	spritesmith = require('gulp.spritesmith'),
	autoprefix = require('gulp-autoprefixer'),	
	imagemin = require('gulp-imagemin');



gulp.task('server',['html', 'sass', 'js'], function(){
	browser.init({
		server: {
			baseDir: './build',
			index: 'html/index.html'
		}
	});
    gulp.watch('./src/style/**/**/*.scss', ['sass']);
    gulp.watch('./src/image/*.png', ['imagemin']);
    gulp.watch('./src/html/*.html', ['html']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./build/html/*.html').on('change', browser.reload);
});

gulp.task('sass', function(){
	gulp.src('./src/style/**/**/*.scss')
		.pipe(sass())
		.pipe(autoprefix({
			browsers: ['last 8 versions'],
            cascade: false 
        }))
		.pipe(gulp.dest('build/style/'))
		.pipe(browser.stream());
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('src/image/icons/*.png')
		.pipe(spritesmith({
			imgName: 'icons.png',
			cssName: 'icons.scss',
			padding: 15
		}));
	return spriteData.pipe(gulp.dest('src/image/'));
});

gulp.task('imagemin', function(){
	gulp.src('./src/image/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('build/image/'))
		.pipe(browser.stream());
})

gulp.task('html', function(){
	gulp.src('./src/html/*.html')
		.pipe(gulp.dest('build/html/'))
		.pipe(browser.stream());
})

gulp.task('js', function(){
	gulp.src('./src/js/*.js')
		.pipe(gulp.dest('build/js/'))
		.pipe(browser.stream());
})
gulp.task('default', ['server']);