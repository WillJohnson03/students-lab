import Student from "./Student";

const StudentList = (props) => {
  return (  
    <div>
      <h2>
        {props.students.map(student =>
        <Student key={student.name} student={student} />)}
      </h2>
    </div>
  );
}

export default StudentList;