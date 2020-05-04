// modal content
var modalBtn = document.querySelector("#create-button");
var modalBg = document.querySelector(".modal-bg");
var closeBtn = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

closeBtn.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

// caos table content

// fetch data and inject into list

//create courses modal
//content
var modalBtnCcg = document.querySelector("#create-ccg-button");
var modalBgCcg = document.querySelector(".modal-ccg");
var closeBtnCcg = document.querySelector(".close-modal-ccg");

modalBtnCcg.addEventListener("click", function () {
  modalBgCcg.classList.add("bg-active");
});

closeBtnCcg.addEventListener("click", function () {
  modalBgCcg.classList.remove("bg-active");
});

// create student group modal
//content
var modalBtnCsg = document.querySelector("#create-Student-button");
var modalBgCsg = document.querySelector(".modal-csg");
var closeBtnCsg = document.querySelector(".close-modal-csg");

modalBtnCsg.addEventListener("click", function () {
  modalBgCsg.classList.add("bg-active");
});

closeBtnCsg.addEventListener("click", function () {
  modalBgCsg.classList.remove("bg-active");
});

async function getCourses() {
  let accessToken = "keyI4tGmCyl6OTd8b";

  let response = await fetch(
    `https://api.airtable.com/v0/appzTOklrPJbC8HUd/Assignments?api_key=${accessToken}`
  );
  let data = await response.json();

  const assignmentTableBody = document.getElementById("assignmentTableBody");

  // <td >${el.fields.Description}</td>
  data.records.map((el) => {
    var row = `<tr class="table-row">
                  <td style="width: 180px;">${el.fields.Name}</td>
                  
                  <td style="width: 100px">${el.fields["Available date"]}</td>
                  <td style="width: 100px">${el.fields["Due date"]}</td>
                  <td style="width: 100px">${el.fields["Close date"]}</td>
                  <td>${el.fields.Links}</td>
                  <td><input type="checkbox"></td>
                  <td><Button class="main-btn edit-btn">Edit</Button></td>
                </tr>`;

    setInnerHTML(assignmentTableBody, row);
  });
}

async function getCourseGroup() {
  let accessToken = "keyI4tGmCyl6OTd8b";

  let response = await fetch(
    `https://api.airtable.com/v0/appzTOklrPJbC8HUd/CourseGroups?api_key=${accessToken}`
  );
  let data = await response.json();

  const courseGroupTableBody = document.getElementById("courseGroupTableBody");

  // <td >${el.fields.Description}</td>
  data.records.map((el) => {
    var row = `<tr class="table-row">
                  <td style="width: 160px;">${el.fields.Name}</td>
                  <td style="width: 180px">${el.fields.Description}</td>
                  <td style="width: 240px">${el.fields.Courses}</td>
                  <td><input type="checkbox"></td>
                  <td "><Button class="main-btn edit-btn">Edit</Button></td>
                </tr>`;

    setInnerHTML(courseGroupTableBody, row);
  });
}

getCourseGroup();

// helper functions
const createNode = (element) => {
  return document.createElement(element);
};

const append = (parent, child) => {
  return parent.appendChild(child);
};

const setInnerHTML = (el, content) => {
  el.innerHTML += content;
};

getCourses();

// // helper function to trigger a publish to Canvas
// function CaosAssignStatus(status) {
//   if (status) {
//     status = false;
//   }
//   return !status;
// }

//post assignments

function postCaosAssigment() {
  var raw = JSON.stringify({
    fields: { Name: " Testing post rq ", Description: "letss gooo" },
  });

  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://api.airtable.com/v0/appzTOklrPJbC8HUd/Assignments?api_key=keyI4tGmCyl6OTd8b",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

//postCaosAssigment();

// Get courses from canvas api and populate into caos courses groups options

async function getCanvasCourses() {
  let response = await fetch(
    "https://manchester.instructure.com/api/v1/courses?access_token=4633~aZJ6XBGUkPFnsPZbHEjpFKKO2sPcjS6KhomwhUptf8VaqCXqy3caCeD95Aekv6SW\n"
  );
  let data = await response.json();

  let course = data.map((el) => {
    el.name;
  });
}

getCanvasCourses();

function pushToCourseOption(name) {
  console.log(name);
  //
}

pushToCourseOption();

// push each course to the airtable course group options

// get all students from canvas and list them here

// Each group can have many or none courses
