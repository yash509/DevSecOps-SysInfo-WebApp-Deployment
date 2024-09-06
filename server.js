

const express = require('express');
const si = require('systeminformation');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
/*express.static(__dirname) will serve the static file if it exists 
in the directory, making it the first point of contact for static assets.
app.get('/', ...) will only handle the request if express.
static doesn't find a corresponding file to serve.*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));       
});

app.get('/cpu', async (req, res) => {
    try {
        const cpuData = await si.cpu();
        res.json(cpuData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch CPU information' });
    }
});

app.get('/ram', async (req, res) => {
    try {
        const ramData = await si.mem();
        res.json(ramData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch RAM information' });
    }
});

app.get('/cache', async (req, res) => {
    try {
        const cacheData = await si.cpuCache(); // Corrected variable name
        res.json(cacheData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch CACHE information' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
