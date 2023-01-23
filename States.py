# Dependencies
import requests
import pandas as pd
import matplotlib as plt
import numpy as np
import json

# Save url as variable
url = "https://us-states.p.rapidapi.com/all"

headers = {
	"X-RapidAPI-Key": "575ca32490msh5a85e1221a9daf0p10835bjsnfdf17e56a208",
	"X-RapidAPI-Host": "us-states.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)
data = response.json()

print(response.text)