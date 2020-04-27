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

const ul = document.getElementById("assignments");

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

// helper function to trigger a publish to Canvas
function CaosAssignStatus(status) {
  if (status) {
    status = false;
  }
  return !status;
}

// helper functions
const createNode = (element) => {
  return document.createElement(element);
};

const append = (parent, child) => {
  return parent.appendChild(child);
};

const setInnerHTML = (parent, append) => {
  parent.innerHTML += append;
};

getCourses();

//   for (var i = 0; i < data.length; i++) {
//     var tr = createNode("tr");
//     var th = createNode("th");
//     var row = `<tr>
//                     <td>hi</td>
//                     <td>hi</td>
//                     <td>hi</td>

//                 </tr>`;

//     assignmentTableBody.innerHTML += row;
//     append(assignmentTable, assignmentTableBody);
//   }
//   console.log(assignmentTableBody);
//   return data;
// }
