/**
 * Created by Alex Torres on 5/23/2016.
 */

(function() {
    'use strict';

    var gulp = require('gulp'),
        nodemon = require('gulp-nodemon'),
        watch = require('gulp-watch'),
        jshint = require('gulp-jshint'),
        livereload = require('gulp-livereload'),
        _paths = ['server/**/*.js', 'client/js/*.js'];


    //registra el demonio de NodeDemon
    gulp.task('nodemon', function() {
        nodemon({
            script: 'todoRestApiBackend.js',
            env: {
                'NODE_ENV': 'development'
            }
        })
            .on('restart');
    });

    // Re-ejecuta la tarea cuando el archivo ha sufrido cambios.
    gulp.task('watch', function() {
        livereload.listen();
        gulp.src(_paths, {
                read: false
            })
            .pipe(watch({
                emit: 'all'
            }))
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
        watch(_paths, livereload.changed);
    });

    //lint js files
    gulp.task('lint', function() {
        gulp.src(_paths)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });


    // La tarea por defecto que se ejecuta cuando se gatilla por comando GULP.
    gulp.task('default', ['lint', 'nodemon', 'watch']);

}());
