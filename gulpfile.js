import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass'; 
import dart from 'sass';

const sassify = sass(dart);

function compileSass(done) {
    return (
        gulp.src('sass/**/*.scss')
        .pipe(sassify({outputStyle: "compressed"}).on('error', sassify.logError))
        .pipe(gulp.dest('css'))
    )

    done();
    };

function squashImages(done) {
    gulp.src('images/**')
		.pipe(imagemin())
        .pipe(gulp.dest('dist'))
        
    done();
}

function watch() {
    console.log('watching files...');
    gulp.watch("sass/**/*.scss", compileSass);
    gulp.watch("images/**", squashImages);
}

export { 
    watch as default, 
    squashImages as crunch,
    compileSass as compile
}