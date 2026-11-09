
import { useState } from "react";
import "./App.css";

function StudentCounter({ count }) {
  return (
    <h2>Nombre d'étudiants : {count}</h2>
  );
}

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Email : {student.email}</p>
      <p>Statut : {student.active ? "Actif" : "Inactif"}</p>
    </div>
  );
}

function StudentList({ students }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
}

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Mohsin",
      email: "mohsin@example.com",
      active: true,
    },
    {
      id: 2,
      name: "Ahmed",
      email: "ahmed@example.com",
      active: false,
    },
  ]);

  // Compteur : students.length est la bonne valeur
  const count = students.length;

  // Ajoute un étudiant sans muter le tableau existant
  const addStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: "Fatima",
      email: "fatima@example.com",
      active: true,
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);
  };

  // Inverse le statut d'un étudiant sans muter l'objet existant
  const toggleStudent = (id) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, active: !student.active }
          : student
      )
    );
  };

  return (
    <div className="container">
      <h1>Liste des étudiants</h1>
      <StudentCounter count={count} />
      <button onClick={addStudent}>Ajouter un étudiant</button>
      <button onClick={() => toggleStudent(students[0].id)}>
        Changer le statut du premier étudiant
      </button>
      <StudentList students={students} />
    </div>
  );
}

export default App;
