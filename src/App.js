import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (count) => ({
  count,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

function App(props) {
  return (
    <div>
      Value: {props.count}
      <button onClick={() => props.dispatch({ type: "counter/incremented" })}>
        Increment
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
