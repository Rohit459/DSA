const {spawn, exec} = require("child_process");

const child = spawn('ls', ['-lh']);

child.on('error', (error) => {
    console.log(error)
})

child.stdout.on('data', (data) => {
    console.log('stdout', data);
})

child.stderr.on('data', (data) => {
    console.log('sdterr', data);
})

child.on('exit', (code, signal) => {
    console.log('exit', code, signal);
})

//exec

exec(pwd, (err, stdout, stderr) => {
    if(err) {
        console.log(error)
        return
    }

    if(stdout) {
        console.log(error)
        return
    }

    if(stderr) {
        console.log(error)
        return
    }
})