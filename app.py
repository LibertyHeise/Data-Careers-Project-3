from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps

app = Flask(__name__)

# Connect to the MongoDB server
client = MongoClient()

# Choose the database you want to use
db = client.data

@app.route("/states")
def states():
    # Retrieve all documents from the "clean_states" collection
    states_data = list(db.states.find({}))

    # Return the data as a JSON object
    return dumps(states_data)

@app.route("/jobs")
def result():
    # Retrieve all documents from the "result" collection
    jobs_data = list(db.jobs.find({}))

    # Return the data as a JSON object
    return dumps(jobs_data)

if __name__ == '__main__':
    app.run(debug=True)
