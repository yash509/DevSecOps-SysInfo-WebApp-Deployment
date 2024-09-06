document.getElementById('cpuButton').addEventListener('click', () => {
    fetch('/cpu')
        .then(response => response.json())
        .then(data => {
            document.getElementById('Info').innerText = `CPU: ${data.manufacturer} ${data.brand} - ${data.speed} GHz`;
        })
     
        .catch(error => {
            document.getElementById('Info').innerText = 'Error fetching CPU info';
            console.error('Error:', error);
        });
      
});

document.getElementById('ramButton').addEventListener('click', () => {
    fetch('/ram')
        .then(response => response.json())
        .then(data => {
            const totalRam = (data.total / (1024 ** 3)).toFixed(2); // Convert to GB
            const usedRam = ((data.total - data.available) / (1024 ** 3)).toFixed(2); // Convert to GB
            document.getElementById('Info').innerText = `RAM: ${totalRam} GB total, ${usedRam} GB used`;
        })
        .catch(error => {
            document.getElementById('Info').innerText = 'Error fetching RAM info';
            console.error('Error:', error);
        });
});

document.getElementById('cacheButton').addEventListener('click', () => {
    fetch('/cache')
        .then(response => response.json())
        .then(data => {
            document.getElementById('Info').innerText = `Cache: L1d - ${data.l1d} KB, L1i - ${data.l1i} KB, L2 - ${data.l2} KB, L3 - ${data.l3} KB`;
        })
        .catch(error => {
            document.getElementById('Info').innerText = 'Error fetching CACHE info';
            console.error('Error:', error);
        });
});
