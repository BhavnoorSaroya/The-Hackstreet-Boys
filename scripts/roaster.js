// Define the keywords for each job type
const jobKeywords = {
    programmer: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Git', 'Github', 'MySQL', 'Agile', 'OOP', 'TDD', ],
    teacher: ['Teaching', 'Education', 'Classroom', 'Lesson', 'Curriculum', 'Student', 'Assessment', 'Grading', 'Pedagogy']
  };
//   const softskill_keywords = [
//     "Achieved", 
//     "Adapted", 
//     "Analyzed", 
//     "Collaborated", 
//     "Created", 
//     "Demonstrated", 
//     "Developed", 
//     "Executed", 
//     "Improved", 
//     "Initiated", 
//     "Managed", 
//     "Negotiated", 
//     "Organized", 
//     "Presented", 
//     "Resolved", 
//     "Strategized", 
//     "Supervised", 
//     "Trained", 
//     "Utilized", 
//     "Volunteered"
//   ];

  
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
  const resumeText = 'Abhishek Chouhan 604-779-4947 achouhan4@my.bcit.ca github.com/abhishekchouhannk linkedin.com/in/abhishekchouhannk Technical Skills ● Java, Python and C Language ● HTML, CSS, Javascript, NodeJS ● Source/Version control: Git, Github ● MySQL and Relational DB Development ● Agile Development Methodologies ● Pair Programming and Testing ● Object Oriented Programming ● Test Driven Development Technical Projects TA-DA | Created a web-application as main backend-developer | Academic Project ● Lead a team of three to successfully develop a to-do list application that lets its users manage their tasks efficiently ● Coded the backend and designed the UI in an agile workflow ● Languages and Tools utilized: HTML, CSS, Javascript, Google Firebase, Bootstrap ● Hosted URL: bbyteam13-1800-202230.web.app MINESWEEPER | Recreated a classic grid game using Java | Personal Project ● Utilized object oriented concepts to develop a fully functional game ● Implemented game logic, user interface and scoring system ● GitHub URL: github.com/abhishekchouhannk/Minesweeper Customer Service Experience Receptionist | Om Health Care Centre Aug 2021 - April 2022 ● Demonstrated strong technical skills by proficiently using office equipment and medical software ● Improved patient satisfaction through efficient scheduling and check-in processes ● Contributed to smooth clinic operations by assisting with various administrative tasks Crew Team Member | Burger King Sep - Dec 2022 ● Improved customer satisfaction by effectively resolving customer complaints and concerns. ● Demonstrated strong communication skills by effectively communicating with customers and coworkers. Education Computer Systems Technology Diploma - BCIT | Term 1- 92% GPA';
  const jobType = 'programmer';
  const rating = rateResume(resumeText, jobType);
  console.log(`Rating: ${rating}%`);
  