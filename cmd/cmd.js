
import path from 'path'
// const path = require('path');
const cmd = require('wow-cmd');

cmd({
    cmdPath: path.join(__dirname),
    options: {
        include: ['.cmd.js'],
        exclude: [],
    }
});
