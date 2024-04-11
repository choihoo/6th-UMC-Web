function Task(props) {
  return (
    <>
      <p>{props.content}</p>
      <button>{props.done}</button>
    </>
  );
}

export default Task;
