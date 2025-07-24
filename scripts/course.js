const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

// UI variables
const courseNavItems = document.querySelector("#course-navlist").querySelectorAll("li");
const courseList = document.querySelector("#course-list");
const courseCredit = document.querySelector("#course-credit");
const courseDetails = document.querySelector("#course-details");

// Variable to store last clicked course nav list item
let courseLastClickedItem;

courseNavItems.forEach(listItem => {
  listItem.addEventListener("click", () => {

    const filteredCourses = filterCourses(listItem);

    // Remove current class All nav when another
    // Item is clicked for the first time
    courseNavItems[0].classList.remove("current");

    // Remove current class from previous clicked item
    // When a new click happens
    if (courseLastClickedItem)
      courseLastClickedItem.classList.remove("current");

    // Add class of current to clicked item
    listItem.classList.toggle("current");

    // Store last clicked item
    courseLastClickedItem = listItem;
    
    // Render courses to the DOM
    renderCourses(filteredCourses);

    // Render credit of courses being displayed
    courseCredit.textContent = computeCourseCredit(filteredCourses);
  });
});

/*
This function filters the course list
Based on course selected

@param {list element} listItem - course selected 
*/
function filterCourses(listItem){

 const filteredCourses = courses.filter(course => listItem.textContent == "All" ? course : course.subject == listItem.textContent);

 return filteredCourses;
}

/*
This creates a LI's and render to DOM

@param {Array} courses - Array of courses to populate LI's 
*/
function renderCourses(courses){
  courseList.innerHTML = "";

  courses.forEach(course => {
    const li = document.createElement("li");
    const courseName = `${course.subject} ${course.number}`

    li.textContent = course.completed ? `\u2713 ${courseName}` : `${courseName}`;
    li.className = course.completed ? "completed" : "";
    li.setAttribute("courseName", courseName)

    courseList.appendChild(li);
  })
}

courseList.addEventListener("click", (e) => {
    if(e.target.matches("li")){
        const [courseSubject, courseNumber] = e.target.getAttribute("courseName").split(" ");

        const course = courses.filter((course) => course.subject == courseSubject && course.number == courseNumber);

        displayCourseDetails(course[0]);
    }
});

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

/*
Compute course credit

@param {Array} courses - Array of courses 
*/
function computeCourseCredit(courses){
 const initialValue = 0;

 const totalCredit = courses.reduce((accumulator, course) => accumulator + course.credits, initialValue);

 return totalCredit;
}

// Display all courses on page load
renderCourses(courses);

// Render all course credit on page load
courseCredit.textContent = computeCourseCredit(courses);