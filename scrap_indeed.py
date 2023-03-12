from selenium import webdriver
import requests
from bs4 import BeautifulSoup
import time
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from fake_useragent import UserAgent
from selenium.webdriver.chrome.options import Options



# def extract_job(job):
#     name = job.find("")

# def extract_job_list(URL):
#     jobs = []
    
#     # for job in job_collect:
#     #     job_info = extract_job(job)
#     #     jobs.append(job_info)
#     # return jobs
#     return job_collect

def extract_job(job):
    name = job.find("span")['title']
    url = "https://ca.indeed.com/viewjob?jk=" + job['data-jk']
    website = "Indeed"
    return {
        "name" : name,
        "company" : "company",
        "url" : url,
        "website" : website
    }

def get_jobs(lang_name):
    jobs = []
    options = Options()
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    browser = webdriver.Chrome(options=options)
    URL = f'https://ca.indeed.com/jobs?q={lang_name}&l=Vancouver'
    browser.get(URL)
    soup = BeautifulSoup(browser.page_source, "html.parser")
    job_collect = soup.find_all("a",{"class":"jcs-JobTitle"})
    for job in job_collect:
        job_info = extract_job(job)
        jobs.append(job_info)
    return jobs
        
        

        
        


