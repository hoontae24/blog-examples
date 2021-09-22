import { Component, createRef, useEffect, useRef } from "react";

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.inputRef = createRef();
    this.focus = () => {
      this.inputRef.current.focus();
    };
    this.reset = () => {
      this.setState({ value: "" });
    };
  }

  render() {
    return (
      <input
        ref={this.inputRef}
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    );
  }
}

function App() {
  const ref = useRef();

  const handleReset = () => {
    ref.current.reset(); // MyInput 컴포넌트 내부의 state를 조작함
  };

  const handleFocus = () => {
    ref.current.focus(); // MyInput 컴포넌트 내부의 input 엘리먼트에 포커스 됨
  };

  useEffect(() => {
    console.log("ref:", ref); // ref: {current: MyInput}
    handleFocus();
  });

  return (
    <div>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleFocus}>focus</button>
      <br />
      <MyInput ref={ref} />
    </div>
  );
}
export default App;
