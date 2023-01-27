from flask import Flask, jsonify, render_template
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
client = MongoClient()
db = client.data

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/v1.0/states")
def states():
    # Retrieve all documents from the "states" collection
    states_data = list(db.states.find())

    # Convert ObjectId to string
    for state in states_data:
        state['_id'] = str(state['_id'])

    # Return the data as a JSON object
    return jsonify(states_data)


@app.route("/api/v1.0/jobs")
def jobs():
    # Retrieve all documents from the "jobs" collection
    jobs_data = list(db.jobs.find())

    # Convert ObjectId to string
    for job in jobs_data:
        job['_id'] = str(job['_id'])

    # Return the data as a JSON object
    return jsonify(jobs_data)

@app.route("/states_table")
def states_table():
    return render_template("states.html")

@app.route("/state_analysis")
def state_charts():
    return render_template("state_charts.html")

@app.route("/jobs_table")
def jobs_table():
    return render_template("jobs_nice.html")

if __name__ == '__main__':
    app.run(debug=True, port=5002)

