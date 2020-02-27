const gulp = require("gulp");
const browserSync = require("browser-sync");
const nodemon = require("gulp-nodemon");

const path = {
    script : "./functions/app/bin/www",
    functions :"./functions"
}

const server = (done)=>{
    nodemon({
        script:path.script,
        watch:[path.functions],
        ext:'js',
        done:done
    }).on('restart',serverReload);
}

const client = (done)=>{
    browserSync({
        proxy:"localhost:3000/",
        port:4000
    });
    done();
}

const watch = (done)=>{
    gulp.watch([path.functions],reload);
    done();
}

const serverReload = ()=>{
    browserSync.reload();
}
const reload = (done)=>{
    browserSync.reload();
    done();
}

module.exports.default = gulp.parallel(server,gulp.series(client,watch));