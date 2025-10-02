/*
* Question 3: File Module
● Create a script that will do the following:
1. Remove Log files
- remove all the files from the Logs directory, if exists
- output the file names to delete
- remove the Logs directory
2. Create Log files
- create a Logs directory, if it does not exist
- change the current process to the new Logs directory
- create 10 log files and write some text into the file
- output the files names to console
- Hint: use the fs module and path module, and the process current
working directory to build directory path. It is acceptable, to have a
remove.js script and separate add.js script.
*/
const fs = require('fs');
const path = require('path');

const removeLogs = () => {
    const logDirectory = path.join(__dirname, "Logs");
    if (fs.existsSync(logDirectory)) {
        fs.readdirSync(logDirectory).forEach(file => {
            console.log(`delete files...${file}`);
            fs.unlinkSync(path.join(logDirectory, file));
        });
        fs.rmdirSync(logDirectory);
        console.log("Logs directory has been removed");
    } else {
        console.log("Logs directory does not exist");
    }
};


const createLogs = () => {
    const logDirectory = path.join(__dirname, `Logs`);
    if (!fs.existsSync(logDirectory)) {
        fs.mkdirSync(logDirectory);
    }
    process.chdir(logDirectory);
    for (let i = 0; i < 10; i++) {
        fs.writeFileSync(`log${i}.txt`, `This is log file #${i}`);
        console.log(`log${i}.txt`);
    }
};

removeLogs();
createLogs();
