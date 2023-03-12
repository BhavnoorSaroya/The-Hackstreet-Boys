// Define the keywords for each job type
// const jobKeywords = {
//     programmer: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Git', 'Github', 'MySQL', 'Agile', 'OOP', 'TDD', ],
//     teacher: ['Teaching', 'Education', 'Classroom', 'Lesson', 'Curriculum', 'Student', 'Assessment', 'Grading', 'Pedagogy'],
//     softskill_keywords : ['Achieved', 'Adapted', 'Analyzed', 'Collaborated', 'Created', 'Demonstrated', 'Developed', 'Executed', 'Improved', 'Initiated', 'Managed', 'Negotiated', 'Organized', 'Presented', 'Resolved', 'Strategized', 'Supervised', 'Trained', 'Utilized', 'Volunteered']
//   };

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

    const numSoftwords = jobKeywords['softskill_keywords'].reduce((count, keyword) => {
      if (words.includes(keyword.toLowerCase())) {
        return count + 1;
      }
      return count;
    }, 0);
  
    // Calculate the rating as a percentage of the total number of keywords for the job type
    const rating = Math.round(numKeywords / jobKeywords[jobType].length * 100);



    softskill_rating = Math.round(numSoftwords / jobKeywords[jobType].length * 100 * 3);
    if (softskill_rating > 100) {
      softskill_rating = 100;
    };
  
    // Return the rating
    return   [rating , softskill_rating];
  }
  
  // Example usage
  const resumeText = 'Abhishek Chouhan 604-779-4947 achouhan4@my.bcit.ca github.com/abhishekchouhannk linkedin.com/in/abhishekchouhannk Technical Skills ● Java, Python and C Language ● HTML, CSS, Javascript, NodeJS ● Source/Version control: Git, Github ● MySQL and Relational DB Development ● Agile Development Methodologies ● Pair Programming and Testing ● Object Oriented Programming ● Test Driven Development Technical Projects TA-DA | Created a web-application as main backend-developer | Academic Project ● Lead a team of three to successfully develop a to-do list application that lets its users manage their tasks efficiently ● Coded the backend and designed the UI in an agile workflow ● Languages and Tools utilized: HTML, CSS, Javascript, Google Firebase, Bootstrap ● Hosted URL: bbyteam13-1800-202230.web.app MINESWEEPER | Recreated a classic grid game using Java | Personal Project ● Utilized object oriented concepts to develop a fully functional game ● Implemented game logic, user interface and scoring system ● GitHub URL: github.com/abhishekchouhannk/Minesweeper Customer Service Experience Receptionist | Om Health Care Centre Aug 2021 - April 2022 ● Demonstrated strong technical skills by proficiently using office equipment and medical software ● Improved patient satisfaction through efficient scheduling and check-in processes ● Contributed to smooth clinic operations by assisting with various administrative tasks Crew Team Member | Burger King Sep - Dec 2022 ● Improved customer satisfaction by effectively resolving customer complaints and concerns. ● Demonstrated strong communication skills by effectively communicating with customers and coworkers. Education Computer Systems Technology Diploma - BCIT | Term 1- 92% GPA';
  const jobType = 'programmer';
  const rating = rateResume(resumeText, jobType);
  console.log(`Rating: ${rating}%`);
//   console.log(rateResume(resumeText, jobType))

// Get the input element
const input = document.getElementById('pdf-file-input');

// Listen for the file to be selected
input.addEventListener('change', function() {
  // Get the selected file
  const file = input.files[0];

  // Create a new file reader
  const reader = new FileReader();

  // Set up the file reader to read the contents of the file as an ArrayBuffer
  reader.readAsArrayBuffer(file);

  // Once the file has been loaded, parse it with pdf.js
  reader.onload = function() {
    // Load the PDF file
    pdfjsLib.getDocument(reader.result).promise.then(function(pdf) {
      // Get the first page
      pdf.getPage(1).then(function(page) {
        // Get the text content of the page
        page.getTextContent().then(function(textContent) {
          // Combine the text items into a single string
          const text = textContent.items.map(function(item) {
            return item.str;
          }).join('');

          // Display the text on the console
          console.log(text);
        });
      });
    });
  };
});

  
  
