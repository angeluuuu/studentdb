fetch("http://localhost:3000/students", { mode: "cors" })
  .then((response) => response.json())


  .then((data) => {
    const tableBody = document.querySelector("#studentTable");


    if (!tableBody) {
      console.error('Element with ID "studentTable" (tbody) not found.');


      return;
    }


    tableBody.innerHTML = "";


    data.forEach((student) => {
      const row = document.createElement("tr");


      const idCell = document.createElement("td");


      idCell.textContent = student.id;


      row.appendChild(idCell);


      const nameCell = document.createElement("td");


      nameCell.textContent = student.name;


      row.appendChild(nameCell);


      const emailCell = document.createElement("td");


      emailCell.textContent = student.email;


      row.appendChild(emailCell);


      const gradeCell = document.createElement("td");


      gradeCell.textContent = student.grade;


      row.appendChild(gradeCell);


      tableBody.appendChild(row);
    });
  })


  .catch((error) => console.error("Error fetching students:", error));


const addBtn = document.querySelector("#submitBtn");


addBtn.addEventListener("click", () => {
  let name = document.getElementById("name").value;


  let email = document.getElementById("email").value;


  let grade = document.getElementById("grade").value;


  let newStudent = { name, email, grade };


  fetch("http://localhost:3000/students/", {
    method: "POST",


    headers: {
      "Content-Type": "application/json",
    },


    body: JSON.stringify(newStudent),
  })
    .then((response) => {
      if (response.ok) {
        alert("Student added successfully!");

        location.reload();
      } else {
        throw new Error("Error creating student");
      }
    })


    .catch((error) => console.error("Error creating student:", error));
});
