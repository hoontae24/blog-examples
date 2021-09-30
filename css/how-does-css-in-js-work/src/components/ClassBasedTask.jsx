import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  root: {
    width: 500,
    display: "inline-block",
  },
  rootChecked: {
    color: "grey",
    textDecoration: "line-through",
  },
}));

const Task = (props) => {
  const cls = useStyles(props);
  const { title, done, onDoneChange } = props;
  return (
    // 완료 여부에 따라 조건부 클래스 적용
    <li className={[cls.root, done ? cls.rootChecked : ""].join(" ")}>
      <input type="checkbox" checked={done} onChange={onDoneChange} />
      {title}
    </li>
  );
};

export default Task;
