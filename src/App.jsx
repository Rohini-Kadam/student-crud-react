// App.jsx
import React, { useState } from "react";
import axios from "axios";

function ManageStudents() {
  const [students, setStudents] = useState([]);

  // CREATE - Add Student
  function addStudent() {
    const id = prompt("Enter ID:");
    const name = prompt("Enter name:");
    const email = prompt("Enter Email:");
    const age = prompt("Enter Age:");
    const batch = prompt("Enter Batch No:");
    const mode = prompt("Enter Mode (Online/Offline):");

    axios
      .post("http://localhost:3000/students", {
        id,
        name,
        email,
        age,
        batch,
        mode,
      })
      .then(() => alert("Student added successfully!"))
      .catch(() => alert(" Error adding student"));
  }

  // READ - View All Students
  function viewStudents() {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch(() => alert("Error fetching students"));
  }

  // UPDATE - Edit Student
  function updateStudent() {
    const id = prompt("Enter Student ID to Update:");
    const name = prompt("Enter Updated name:");
    const email = prompt("Enter Updated Email:");
    const age = prompt("Enter Updated Age:");
    const batch = prompt("Enter Updated Batch No:");
    const mode = prompt("Enter Updated Mode (Online/Offline):");

    axios
      .put(`http://localhost:3000/students/${id}`, {
        name,
        email,
        age,
        batch,
        mode,
      })
      .then(() => alert("Student updated successfully!"))
      .catch(() => alert("Error updating student"));
  }

  // DELETE - Remove Student
  function deleteStudent() {
    const id = prompt("Enter Student ID to Delete:");

    axios
      .delete(`http://localhost:3000/students/${id}`)
      .then(() => alert("Student deleted successfully!"))
      .catch(() => alert("Error deleting student"));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Manage Students</h2>

      <button onClick={addStudent}>Add Student</button>
      <button onClick={viewStudents} style={{ marginLeft: "10px" }}>
        {" "}
        View All Students
      </button>
      <button onClick={updateStudent} style={{ marginLeft: "10px" }}>
        {" "}
        Update Student
      </button>
      <button onClick={deleteStudent} style={{ marginLeft: "10px" }}>
        Delete Student
      </button>

      <h3 style={{ marginTop: "30px" }}>Student List</h3>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Batch</th>
            <th>Mode</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.email}</td>
              <td>{stu.age}</td>
              <td>{stu.batch}</td>
              <td>{stu.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageStudents;
