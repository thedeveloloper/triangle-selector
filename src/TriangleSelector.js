import sigmoid from "./sigmoid.ts";
import "./TriangleSelector.css";

function TriangleSelector() {
  console.log(sigmoid(0.5, 0, 0.86));
  return (
    <>
      <div className="triangle" />
      <div className="triangle-border" />
      <div className="triangle-selector" />
      {/* <div className="triangle-selector-border" /> */}
    </>
  );
}

export default TriangleSelector;
