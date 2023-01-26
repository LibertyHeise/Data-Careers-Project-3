# from flask import Flask, render_template, jsonify
# from pymongo import MongoClient
# import json
# from bson.json_util import dumps, loads

# app = Flask(__name__)

# # Connect to the MongoDB server
# client = MongoClient()

# # Choose the database you want to use
# db = client.data

# def get_data(data):
#     data['_id'] = str(data['_id'])
#     return data

# @app.route("/")
# def index():
#     return render_template("index.html")


# @app.route("/api/v1.0/states")
# def states():
#     data = [get_data(x) for x in db.states.find()]
#     # Retrieve all documents from the "states" collection
#     states_data = list(db.states.find())

#     # json_data = json.dumps(states_data)

#     # Return the data as a JSON object
#     return jsonify(json.dumps(data))

# @app.route("/api/v1.0/jobs")
# def result():
#     data2 = [get_data(x) for x in db.jobs.find()]
#     # Retrieve all documents from the "jobs" collection
#     jobs_data = list(db.jobs.find())

#     # Return the data as a JSON object
#     return jsonify(json.dumps(data2))

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)

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

if __name__ == '__main__':
    app.run(debug=True, port=5001)

