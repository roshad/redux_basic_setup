import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (count) => ({
  count,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

function App() {
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
