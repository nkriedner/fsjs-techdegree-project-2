// Define the number of student cards per page
const cardsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
    // Calculate the start and end index of the student data
    const startIndex = page * cardsPerPage - cardsPerPage;
    const endindx = page * cardsPerPage;

    // Select the student-list and empty it
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML = "";

    // Loop over the list of students
    for (let i = 0; i < list.length; i++) {
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

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
    // Calculate the number of pagination buttons
    const numOfPaginationBtns = Math.ceil(list.length / cardsPerPage);

    // Select the student-list and empty it
    const linkList = document.querySelector(".link-list");
    linkList.innerHTML = "";

    // Loop over number of pages
    for (let i = 0; i < numOfPaginationBtns; i++) {
        // Create the html for that pagination button
        const buttonHtml = `
            <li>
               <button type="submit">${i + 1}</button>
            </li>
        `;
        linkList.insertAdjacentHTML("beforeend", buttonHtml);
    }

    // Set the first pagination button to active
    linkList.querySelector("li button").className = "active";

    // Event listener for data pagination buttons (.link-list)
    linkList.addEventListener("click", (e) => {
        // Check if clicked taret is a button
        if (e.target.tagName === "BUTTON") {
            // 1. Remove 'active' class from any other pagination button
            document.querySelector(".active").classList.remove("active");

            // 2. Add 'active' class to the button that was clicked
            e.target.classList.add("active");

            // 3. Call showPage() function with list and page number to display
            const pageToDisplay = parseInt(e.target.textContent);
            showPage(list, pageToDisplay);
        }
    });
}

// Add a search component
function addSearchComponent() {
    // Create search component
    const searchComponentHtml = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `;
    document.querySelector(".header").insertAdjacentHTML("beforeend", searchComponentHtml);

    // Keyup Event listener for search component
    document.querySelector("#search").addEventListener("keyup", (e) => {
        const userInput = e.target.value.toLowerCase();
        const studentMatches = []; // students matching the search input

        // Loop through the data and check each name
        for (let i = 0; i < data.length; i++) {
            // Create a variable for current studentName
            const studentName = data[i].name.first + " " + data[i].name.last;
            // Check if studenName contains the search input
            if (studentName.toLowerCase().includes(userInput)) {
                // -> Add it to the studentMatches array
                studentMatches.push(data[i]);
            }
        }

        // Check if there are any matches to display
        if (studentMatches.length > 0) {
            showPage(studentMatches, 1);
            addPagination(studentMatches);
        } else {
            // Select the student-list and empty it
            const studentList = document.querySelector(".student-list");
            studentList.innerHTML = "";

            // Select the student-list and empty it
            const linkList = document.querySelector(".link-list");
            linkList.innerHTML = "";

            // Add no results message:
            studentList.innerHTML =
                "<h3 style='color: grey; font-size: 2rem; font-style: italic; margin-top: 1.5rem'>No results found</h3>";
        }
    });

    // Click Event Listener for search button
    document.querySelector("header button").addEventListener("click", () => {
        console.log("click");
        // Call the check
    });
}

// Call functions
showPage(data, 1);
addPagination(data);
addSearchComponent();
