import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  root: ({ done }) => ({
    width: 500,
    display: "inline-block",
    color: done ? "gray" : "inherit",
    textDecoration: done ? "line-through" : "inherit",
  }),
}));

const Task = (props) => {
  const cls = useStyles(props);
  const { title, done, onDoneChange } = props;
  return (
    <li className={cls.root}>
      <input type="checkbox" checked={done} onChange={onDoneChange} />
      {title}
    </li>
  );
};

export default Task;
