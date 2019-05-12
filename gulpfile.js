const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const imagemin = require('gulp-imagemin');
const jsdoc = require('gulp-jsdoc3');




const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/css/style.css'
];

const jsFiles = [
    './src/js/script.js'
]
function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'))
};


function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
};

function img() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}

function watch() {
    gulp.watch('./src/css//*.css', styles);
    gulp.watch('./src/js/**/*.js', scripts);
}

function clean() {
    return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('img', img);
gulp.task('doc', function (cb) {
    gulp.src(['README.md', './src/**/*.js'], { read: false })
        .pipe(jsdoc(cb));
});
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean,
    gulp.parallel(styles, scripts, img)));

gulp.task('dev', gulp.series('build', 'watch'));