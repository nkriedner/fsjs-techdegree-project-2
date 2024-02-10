/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    // Define the number of student cards per page
    const cardsPerPage = 9;

    // Calculate the start and end index of the student data
    const startIndex = page * cardsPerPage - cardsPerPage;
    const endindx = page * cardsPerPage;

    // Select the student-list and empty it
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML = "";

    // Loop over the list of students
    for (let i = 0; i < list.length; i++) {
        //   console.log(list[i].name.first);

        // Check if this student is on current page
        if (i >= startIndex && i < endindx) {
            // Create the html for that specific student card
            const cardHtml = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                     <h3>${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${list[i].registered.date}</span>
                  </div>
               </li>
            `;
            // Add student card to page
            studentList.insertAdjacentHTML("beforeend", cardHtml);
        }
    }
}
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
