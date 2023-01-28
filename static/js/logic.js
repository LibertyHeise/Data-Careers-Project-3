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
        let job_title = [];
        let company_name = [];
        for(i in data2){
            if (data2[i]['job_city'] && data2[i]['job_longitude'] && data2[i]['job_latitude'] && data2[i]['job_title'] && data2[i]['employer_name']){
                cities.push(data2[i]['job_city']);
                lat.push(data2[i]['job_latitude']);
                lon.push(data2[i]['job_longitude']);
                job_title.push(data2[i]['job_title']);
                company_name.push(data2[i]['employer_name']);

            }
        }
        console.log("Company name:" + company_name + "Job Title:" + job_title + "City:" + cities + "Lat:" + lat + "Long:" + lon);
    }
);


d3.json('http://127.0.0.1:5002/api/v1.0/states',
    function (data) {
        console.log(data);
        


    }
);
