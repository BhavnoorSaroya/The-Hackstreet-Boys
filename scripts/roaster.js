// Define the keywords for each job type////
// const jobKeywords = {
//     programmer: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Git', 'Github', 'MySQL', 'Agile', 'OOP', 'TDD', ],
//     teacher: ['Teaching', 'Education', 'Classroom', 'Lesson', 'Curriculum', 'Student', 'Assessment', 'Grading', 'Pedagogy'],
//     softskill_keywords : ['Achieved', 'Adapted', 'Analyzed', 'Collaborated', 'Created', 'Demonstrated', 'Developed', 'Executed', 'Improved', 'Initiated', 'Managed', 'Negotiated', 'Organized', 'Presented', 'Resolved', 'Strategized', 'Supervised', 'Trained', 'Utilized', 'Volunteered']
//   };
$('#pdf-file-input').slideUp(2);
// Get the input element
const input = document.getElementById("pdf-file-input");

// Listen for the file to be selected
input.addEventListener("change", function () {
  // Get the selected file
  const file = input.files[0];

  // Create a new file reader
  const reader = new FileReader();

  // Set up the file reader to read the contents of the file as an ArrayBuffer
  reader.readAsArrayBuffer(file);

  // Once the file has been loaded, parse it with pdf.js
  reader.onload = function () {
    // Load the PDF file
    pdfjsLib.getDocument(reader.result).promise.then(function (pdf) {
      // Get the first page
      pdf.getPage(1).then(function (page) {
        // Get the text content of the page
        page.getTextContent().then(function (textContent) {
          // Combine the text items into a single string
          const text = textContent.items
            .map(function (item) {
              return item.str;
            })
            .join("");

          // Display the text on the console
          console.log(text);
          resumeText = text;
          console.log(rateResume(text, jobType));
          //
          // return(text);
        });
      });
    });
  };
});

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

  const numSoftwords = jobKeywords["softskill_keywords"].reduce(
    (count, keyword) => {
      if (words.includes(keyword.toLowerCase())) {
        return count + 1;
      }
      return count;
    },
    0
  );

  // Calculate the rating as a percentage of the total number of keywords for the job type
  const rating = Math.round((numKeywords / jobKeywords[jobType].length) * 100);

  softskill_rating = Math.round(
    (numSoftwords / jobKeywords["softskill_keywords"].length) * 100 * 3
  );
  if (softskill_rating > 100) {
    softskill_rating = 100;
  }

  // Return the rating
  return [rating, softskill_rating];
}

const selectElement = document.getElementById("mySelect");

selectElement.addEventListener("change", function () {

    $('#pdf-file-input').slideDown(600);

  const selectedOption = selectElement.value;
  console.log(selectedOption);
  jobType = selectedOption;
});

// Example usage
var resumeText = "";
var jobType = "";
// if (resumeText != "text" && job)
// const rating = rateResume(resumeText, jobType);
//   console.log(`Rating: ${rating}%`);
//   console.log(rateResume(resumeText, jobType))



// // Listen for the file to be selected
// input.addEventListener('change', function() {
  
  
//     console.log(input.files[0]);
//     var embed = document.getElementById('output');
//     embed.src = URL.createObjectURL(event.target.files[0]);


  
  
//   // Get the selected file
//   const file = input.files[0];

//   // Create a new file reader
//   const reader = new FileReader();

//   // Set up the file reader to read the contents of the file as an ArrayBuffer
//   reader.readAsArrayBuffer(file);

//   // Once the file has been loaded, parse it with pdf.js
//   reader.onload = function() {
//     // Load the PDF file
//     pdfjsLib.getDocument(reader.result).promise.then(function(pdf) {
//       // Get the first page
//       pdf.getPage(1).then(function(page) {
//         // Get the text content of the page
//         page.getTextContent().then(function(textContent) {
//           // Combine the text items into a single string
//           const text = textContent.items.map(function(item) {
//             return item.str;
//           }).join('');

//           // Display the text on the console
//           console.log(text);
//         });
//       });
//     });
//   };
// });

  
  
