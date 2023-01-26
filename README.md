## Job Availability for Entry-Level Data Scientists and Analysts 

![](https://file%2B.vscode-resource.vscode-cdn.net/Users/libertyheise/Desktop/Homework/Project-3/images/computer%20image.jpeg?version%3D1674697824605)

## Contributors
Jeremy Tallant, Liberty Heise, Kaylie Aguilera, Mychele Larson, Eric Martinez

## Description
The goal of our website is to allow students of certification programs to query and review specific entry-level job information such as location, company, job description in order to do specific searches for potential jobs.  The website uses up-to-date information which then creates a map allowing the user to interact and search with ease.  The target jobs are all entry-level, so the user doesn't have to be overwhelmed with options that are outside their skill level.  The hope of this website is to create a dynamic, interactive informational which allows new graduates to get excited and become knowledgable about their career opportunities.

## API Keys
In order to run the code within this project, you will need to create an API key from the following website:  https://us-states.p.rapidapi.com/all


## Table of Contents
1.  Overview of Data
2.  Research Questions
3.  Difficulties, Data Retrieval and Cleansing
4.  Website Creation
5.  Results
6.  Where to Next
7.  Instructions on how to run the code

## Overview of Data

The website uses API data from Rapid API regarding the United States Job Market, last updated in .....

## Difficulties, Data Retrieval and Cleansing

Initially, we struggled to find an API that suited our purposes and was easily accessable.  We were unable to webscrape a website with the best 10 cities for a Data Scientist to get a job due to the fact that they used classes instead of id.  


Eventually, we settled on using a purchased API from Rapid API called....  the data was then written to a JSON file and then created a Pandas data frame.  The data was cleaned for nulls and half the data set using nulls was dropped.  The column for territories was also dropped.  

The data was then queried for: entry_level_data_analyst and entry_level_data_scientists.  Once these were returned, the tables were then merged.  
![](https://file%2B.vscode-resource.vscode-cdn.net/Users/libertyheise/Desktop/Homework/Project-3/images/Screenshot%202023-01-25%20at%201.30.49%20PM.png?version%3D1674697762515)

The data was then imported into MongoDB and we are now on our way to creating our website.  The GitHub page was created so our index.html can go live.
![](https://file%2B.vscode-resource.vscode-cdn.net/Users/libertyheise/Desktop/Homework/Project-3/images/Screenshot%202023-01-25%20at%201.37.48%20PM.png?version%3D1674697895994)

## Website Creation

We encountered some diffficulty when attempting to get the javascript code to run on our live server. 
Occassionally our map would appear however without data points we specified and other times the map would not appear at all.

We accidentally left all the different servers we were running on not allowing our edited code to be read.
Once we closed the servers and reran the code we started pulling in data but it was not formated correctly.

We came to the realization that we still had some data cleaning to do, there were quite a few nulls left in our dataset.
Nulls are able to be read in Python however they were not able to be read in Javascript.

![image](https://user-images.githubusercontent.com/113858556/214741740-d6235e48-fb1a-48b1-b8ab-a9db83c25794.png)


The JS code, the app.py folder, index.html as well as the database needed to be edited so that they would work together.
(Manny's help)


## Results


## Where to Next


## Instructions on how to run the code


