const fs = require('fs');

const fileName = 'example.txt';

fs.open(fileName, 'w+', (err, fd) => {
    if (err) {
        console.error('Error opening the file:', err);
        return;
    }

    const initialContent = '0123456789';
    fs.write(fd, initialContent, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            fs.close(fd, () => {});
            return;
        }

        const buffer = Buffer.from('AB');
        fs.write(fd, buffer, 0, buffer.length, 5, (err) => {
            if (err) {
                console.error('Error writing at the specified position:', err);
                fs.close(fd, () => {});
                return;
            }

            fs.readFile(fileName, 'utf-8', (err, data) => {
                if (err) {
                    console.error('Error reading the file:', err);
                } else {
                    console.log('File content:', data);
                }

                fs.close(fd, (err) => {
                    if (err) {
                        console.error('Error closing the file:', err);
                    }
                });
            });
        });
    });
});