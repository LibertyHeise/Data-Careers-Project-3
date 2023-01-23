from splinter import Browser
from bs4 import BeautifulSoup as bs
import time
from webdriver_manager.chrome import ChromeDriverManager


def scrape_info():
    # Set up Splinter
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

    # Visit zippia.com
    url = "https://www.zippia.com/data-scientist-jobs/best-states/?survey_step=step3"
    browser.visit(url)

    time.sleep(1)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")

    # Get the top 10 states to get a DS job in
    top_ten_states = soup.find('div', id='states')

    # # Get the min avg temp
    # min_temp = avg_temps.find_all('strong')[0].text

    # # Get the max avg temp
    # max_temp = avg_temps.find_all('strong')[1].text

    # # BONUS: Find the src for the sloth image
    # relative_image_path = soup.find_all('img')[2]["src"]
    # sloth_img = url + relative_image_path

    # # Store data in a dictionary
    # data_science_states = {
    #     "sloth_img": sloth_img,
    #     "min_temp": min_temp,
    #     "max_temp": max_temp
    # }

    # Close the browser after scraping
    browser.quit()

    # Return results
    return data_science_states