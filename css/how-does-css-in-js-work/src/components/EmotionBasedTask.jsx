import { css } from "@emotion/css";

const Task = (props) => {
  const { title, done, onDoneChange } = props;
  return (
    <div
      className={css`
        width: 500px;
        display: inline-block;
        color: ${done ? "gray" : "inherit"};
        text-decoration: ${done ? "line-through" : "inherit"};
      `}
    >
      <input type="checkbox" checked={done} onChange={onDoneChange} />
      {title}
    </div>
  );
};

export default Task;
