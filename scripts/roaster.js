// Define the keywords for each job type
const jobKeywords = {
    programmer: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Git', 'Github', 'MySQL', 'Agile', 'OOP', 'TDD'],
    teacher: ['Teaching', 'Education', 'Classroom', 'Lesson', 'Curriculum', 'Student', 'Assessment', 'Grading', 'Pedagogy']
  };
  
  // Define a function to rate a resume for a given job type
  function rateResume(resumeText, jobType) {
    // Convert the resume text to lowercase and split into individual words
    const words = resumeText.toLowerCase().split(/\W+/);
  
    // Count the number of keywords found in the resume for the given job type
    const numKeywords = jobKeywords[jobType].reduce((count, keyword) => {
      if (words.includes(keyword.toLowerCase())) {
        return count + 1;
      }
      return count;
    }, 0);
  
    // Calculate the rating as a percentage of the total number of keywords for the job type
    const rating = Math.round(numKeywords / jobKeywords[jobType].length * 100);
  
    // Return the rating
    return rating;
  }
  
  // Example usage
  const resumeText = 'Abhishek Chouhan\n604-779-4947\nachouhan4@my.bcit.ca\nTechnical Skills\n● Java, Python and C Language\n● HTML, CSS, Javascript, NodeJS\n● Source/Version control: Git, Github\n● MySQL and Relational DB Development\n● Agile Development Methodologies\n● Pair Programming and Testing\n● Object Oriented Programming\n● Test Driven Development\nTechnical Projects\nTA-DA | Created a web-application as main backend-developer | Academic Project\n● Lead a team of three to successfully develop a to-do list application that lets its\nusers manage their tasks efficiently\n● Coded the backend and designed the UI in an agile workflow\n● Languages and Tools utilized: HTML, CSS, Javascript, Google Firebase, Bootstrap\n● Hosted URL: bbyteam13-1800-202230.web.app\nMINESWEEPER | Recreated a classic grid game using Java | Personal Project\n● Utilized object oriented concepts to develop a fully functional game\n● Implemented game logic, user interface and scoring system\n● GitHub URL: github.com/abhishekchouhannk/Minesweeper\nCustomer Service Experience\nReceptionist | Om Health Care Centre Aug 2021 - April 2022\n● Demonstrated strong technical skills by proficiently using office equipment and medical software\n● Improved patient satisfaction through efficient scheduling and check-in processes\n● Contributed to smooth clinic operations by assisting with various administrative tasks\nCrew Team Member | Burger King Sep - Dec 2022\n● Improved customer satisfaction by effectively resolving customer complaints and concerns.\n● Demonstrated strong communication skills by effectively communicating with customers and\ncoworkers.\nEducation\nComputer Systems Technology Diploma - BCIT | Term 1- 92% GPA';
  const jobType = 'programmer';
  const rating = rateResume(resumeText, jobType);
  console.log(`Rating: ${rating}%`);
  