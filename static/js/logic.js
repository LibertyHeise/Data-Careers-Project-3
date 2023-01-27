d3.json('http://127.0.0.1:5002/api/v1.0/jobs',
    function (data2) {
    //     job_is_remote": false, 
    // "job_latitude": 40.514202, 
    // "job_longitude": -88.99063, 
    // "job_state": "IL", 
    // "job_title": "Entry Level Data Analyst"
        let cities = [];
        let lat = [];
        let lon = [];
        for(i in data2){
            if (data2[i]['job_city'] && data2[i]['job_longitude']){
                cities.push(data2[i]['job_city']);
                lat.push(data2[i]['job_latitude']);
                lon.push(data2[i]['longitude']);
            }
        }
        console.log("This is the data for cities: " + cities)
    }
);


d3.json('http://127.0.0.1:5002/api/v1.0/states',
    function (data) {
        console.log(data);
        


    }
);
