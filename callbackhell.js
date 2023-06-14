const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, content1) => {
    if (err) {
        console.error(err);
    } else {
        console.log(content1);

        fs.readFile('file2.txt', 'utf8', (err, content2) => {
            if (err) {
                console.error(err);
            } else {
                console.log(content2);

                fs.readFile('file3.txt', 'utf8', (err, content3) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(content3);

                        // And so on...
                    }
                });
            }
        });
    }
});













const fs = require('fs').promises;

fs.readFile('file1.txt', 'utf8')
    .then(content1 => {
        console.log(content1);
        return fs.readFile('file2.txt', 'utf8');
    })
    .then(content2 => {
        console.log(content2);
        return fs.readFile('file3.txt', 'utf8');
    })
    .then(content3 => {
        console.log(content3);
        // And so on...
    })
    .catch(err => {
        console.error(err);
    });