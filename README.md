## JobTinder - The application to improve your resume and find you your dream career

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
JobTinder is a job search buddy app that uses machine learning algorithms to match job seekers with suitable jobs based on their skills, experience, and preferences. It provides a platform for job seekers to upload their resumes, and receive feedback on their resumes. Additionally, JobTinder aggregates job listings from various sources, making it a one-stop-shop for job seekers to find and apply for jobs. Overall, JobTinder aims to simplify and streamline the job search process for job seekers.
	
# Team Members    
* Jasper Oh        | BCIT
* Yousuf Rabani    | BCIT
* Bhavnoor Saroya  | BCIT
* Jaskirat Singh   | BCIT
* Abhishek Chouhan | BCIT
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript, Python
* Selenium, Beautiful Soup, Flask 
* ...
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── pages                    # contains all the other pages linked to this app
├── pythonBackend            # contains the backend that utilizes Selenium, Flask, Beautiful Soap and other python libraries
├── image                    # contains all the images utilized in this project
├── scripts                  # folder for script files
├── style                    # css files
├── .gitignore               # Git ignore file
├── aboutus.html             # page that contains information on the hackstreet boys team members
├── resumeroaster.html       # page that showcases the resume feedback feature
├── help.html                # contains the FAQ section for the app
├── index.html               # landing HTML file, this is the landing page for our app
└── README.md                # information on the project


## QUESTIONS YOU MAY HAVE

1. How does the ResumeRoaster feature work?
--> The resume roaster feature works by scanning your resume against some of the most popular keywords that are used on that resumes in that specific job industry and 
it then gives the user feedback based on the score they receive (depending on the number keywords matched). 

In the future, we intend to use a machine learning model that uses linear regression to fine tune feedback and the score rating. This would give even better insights to the user, however this could not be implemented at present due to the time constraint.

2. Most job websites use cloudflare to prevent scrapers from using their data, how did your career matchmaker feature overcome this hurdle?

--> We used Selenium, using chrome as a driver to overcome the issue of cloudflare being used to prevent scraping. 









3. How does JobTinder help the user gain a sense of JobSecurity?
--> A well-crafted resume can increase their chances of getting an interview, which can lead to a job offer and better morale.
    Our application can help job seekers keep track of their job applications, including which jobs they have applied for, when they applied, and any follow-up actions they need to   take. 
    It keeps aggregating job postings from all over the internet, thus it application can help job seekers find a wider range of job opportunities.
    This can help them feel more in control of their job search.

    Overall, this is THE application to make the job search process much less stressful and reduce anxiety and increase feelings of job security 
```
