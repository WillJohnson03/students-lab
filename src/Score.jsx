const Score = (props) => {
  return (
    <>
      <h4>
        Date: {props.object.date}
      </h4>
      <p>  
        Score: {props.object.score}
      </p>
    </>
  );
}

export default Score;