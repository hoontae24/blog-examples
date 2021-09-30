import styled from "styled-components";

const ListItem = styled.li`
  width: 500px;
  display: inline-block;
  color: ${({ done }) => (done ? "gray" : "inherit")};
  text-decoration: ${({ done }) => (done ? "line-through" : "inherit")};
`;

const Task = (props) => {
  const { title, done, onDoneChange } = props;
  return (
    <ListItem done={done}>
      <input type="checkbox" checked={done} onChange={onDoneChange} />
      {title}
    </ListItem>
  );
};

export default Task;
