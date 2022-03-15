import Score from "./Score";

const Student = (props) => {
  return (  
    <>
      <div className="student">
        <h1>
          Name: {props.student.name}
        </h1>
        <p>
          Biography: {props.student.bio}
        </p>
        {props.student.scores.map(object => 
          <Score object={object} />)}
      </div>
    </>
  );
}

export default Student;