## Job Availability for Entry-Level Data Scientists and Analysts 

![computer image](https://user-images.githubusercontent.com/113858556/214752827-261d6e7b-bc2a-445f-97b2-624f94dac8bb.jpeg)

## Contributors
Jeremy Tallant, Liberty Heise, Kaylie Aguilera, Mychele Larson, Eric Martinez

## Description
The goal of our website is to allow students of certification programs to query and review specific entry-level job information such as location, company, job description in order to do specific searches for potential jobs.  The website uses up-to-date information which then creates a map allowing the user to interact and search with ease.  The target jobs are all entry-level, so the user doesn't have to be overwhelmed with options that are outside their skill level.  The hope of this website is to create a dynamic, interactive informational which allows new graduates to get excited and become knowledgable about their career opportunities.

## API Keys
In order to run the code within this project, you will need to create an API key from the following website:  https://us-states.p.rapidapi.com/all

![image](https://user-images.githubusercontent.com/113858556/214754155-56d88483-519c-48ed-a637-938794450c92.png)

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

![image](https://user-images.githubusercontent.com/113858556/214753273-a7f86970-a124-496d-817f-2a1de3271fc0.png)

Eventually, we settled on using a purchased API from Rapid API called....  the data was then written to a JSON file and then created a Pandas data frame.  The data was cleaned for nulls and half the data set using nulls was dropped.  The column for territories was also dropped.

![image](https://user-images.githubusercontent.com/113858556/214753463-d4e42876-dd93-4886-aa2c-605db6884576.png)

The data was then queried for: entry_level_data_analyst and entry_level_data_scientists.  Once these were returned, the tables were then merged.

<img width="1162" alt="Screenshot 2023-01-25 at 1 30 49 PM" src="https://user-images.githubusercontent.com/113858556/214752948-881e6d3b-85a3-43af-827f-216dcfaa908e.png">

The data was then imported into MongoDB and we are now on our way to creating our website.  The GitHub page was created so our index.html can go live.

<img width="609" alt="Screenshot 2023-01-25 at 1 37 48 PM" src="https://user-images.githubusercontent.com/113858556/214753004-d822c2b7-2a7e-429a-96a4-70049fbd3f42.png">

## Website Creation

We encountered some diffficulty when attempting to get the javascript code to run on our live server. 
Occassionally our map would appear however without data points we specified and other times the map would not appear at all.

![Project_3_Map](https://user-images.githubusercontent.com/113858556/214748865-48461b59-0a56-443b-a872-7cd12df7c023.png)

![Project_3_No_Map](https://user-images.githubusercontent.com/113858556/214749130-bd3a9f76-a544-49de-9e7f-8ada1169b99a.png)

We accidentally left all the different servers we were running on not allowing our edited code to be read.
Once we closed the servers and reran the code we started pulling in data but it was not formated correctly.

![Too_Many_Servers](https://user-images.githubusercontent.com/113858556/214750359-934074ed-c8e1-4b44-8c24-4ed1cdeda4a3.png)

![Not_Formatted_Correctly](https://user-images.githubusercontent.com/113858556/214751279-a7c91e89-cab4-45b1-8927-c4c43881fa51.png)

We came to the realization that we still had some data cleaning to do, there were quite a few nulls left in our dataset.
Nulls are able to be read in Python however they are not able to be read in Javascript.

![Finding_Nulls](https://user-images.githubusercontent.com/113858556/214751522-4688feec-5be6-4ad6-ba12-36016f8cdfb5.png)

The JS code, the app.py folder, index.html as well as the database all needed additional CRUD so that they would work together.

![image](https://user-images.githubusercontent.com/113858556/214753866-c932c633-3e3d-4351-81e5-ad4335e83751.png)

## Results


## Where to Next


## Instructions on how to run the code


