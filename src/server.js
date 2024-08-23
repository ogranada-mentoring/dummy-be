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

    server.listen(process.env.PORT || 5050, () => {
        console.log('server is ready...');
    })
}

main();
