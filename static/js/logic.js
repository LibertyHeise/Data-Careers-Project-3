// // Initialize the map
// const map = L.map('map').setView([39.828175, -98.5795], 4);

// // Add the OpenStreetMap tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
d3.json('http://127.0.0.1:5001/api/v1.0/jobs').then(
    function (data2) {
        console.log("this is data for data 2");
        console.log(data2);
    }
);


d3.json('http://127.0.0.1:5001/api/v1.0/states').then(
    function (data) {
        console.log(data);
        


    }
);

// Create a map object
var map = L.map('map').setView([job_latitude, job_longitude], 13);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Loop through the data and create a marker for each data point
for (var i = 0; i < data.length; i++) {
    var marker = L.marker([data[i].job_latitude, data[i].job_longitude]).addTo(map);
    marker.bindPopup(`Employer: ${data[i].employer_name} <br> City: ${data[i].job_city} <br> Apply: <a href='${data[i].job_apply_link}'>Link</a>`);
}

// Import the D3 library
const d3 = require("d3");

// Define the API endpoint
const apiUrl = "http://127.0.0.1:5001/api/v1.0/states";

// Use D3's `json` method to retrieve the data from the API
d3.json(apiUrl).then(function(data) {
    console.log(data); // Log the data to the console for debugging

    // Create a variable to store the population data
    let populationData = data.map(function(state) {
        return state.population.total;
    });

    // Create a variable to store the state names
    let stateNames = data.map(function(state) {
        return state.name;
    });

    // Create a bar chart using the population data
    let barChart = d3.select("#chart")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "500px")
        .selectAll("rect")
        .data(populationData)
        .enter()
        .append("rect")
        .attr("width", "20px")
        .attr("height", function(d) { return d; })
        .attr("x", function(d, i) { return i * 25; })
        .attr("y", function(d) { return 500 - d; })
        .attr("fill", "blue");

    // Add state names as labels to the bar chart
    let textLabels = d3.select("#chart")
        .append("svg")
        .selectAll("text")
        .data(stateNames)
        .enter()
        .append("text")
        .text(function(d) { return d; })
        .attr("x", function(d, i) { return i * 25; })
        .attr("y", function(d) { return 500 - populationData[i] - 5; });
});


// // Fetch data from the Flask API
// fetch('http://127.0.0.1:5001/api/v1.0/states', {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(response => {
//         if(response.ok) {
//             return response.json();
//         }
//         else {
//             throw new Error(response.statusText);
//         }
//     })
//     .then(data => {
//         // Loop through the data and add markers for each state
//         data.forEach(state => {
//             L.marker([state.capital.latitude, state.capital.longitude])
//                 .bindPopup(state.capital.name)
//                 .addTo(map);
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });

