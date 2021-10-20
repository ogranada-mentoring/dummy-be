const express = require('express')
const cors = require('cors')

function main() {
    const server = express();
    server.use(cors());
    server.get('/api/images', (req, res) => {
        res.json({
            image: 'https://picsum.photos/800/600'
        })
    });

    server.listen(5000, () => {
        console.log('server is ready...');
    })
}

main();