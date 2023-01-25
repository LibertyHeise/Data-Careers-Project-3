// Initialize the map
const map = L.map('map').setView([39.828175, -98.5795], 4);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from the Flask API
fetch('http://127.0.0.1:5000/states', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    })
    .then(data => {
        // Loop through the data and add markers for each state
        data.forEach(state => {
            L.marker([state.capital.latitude, state.capital.longitude])
                .bindPopup(state.capital.name)
                .addTo(map);
        });
    })
    .catch(error => {
        console.log(error);
    });

