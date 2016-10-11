var gulp = require('gulp');
var less = require('gulp-less');

//gulp.task("hello",function(){
//    console.log("您好");
//})

gulp.task('layout',function(){
    return gulp.src("src/less/layouts/layout/*.less")
        .pipe(less())
        .pipe(gulp.dest('assets/layouts/layout'));
});

gulp.task('default',['layout']);