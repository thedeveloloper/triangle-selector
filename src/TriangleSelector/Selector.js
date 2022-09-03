import "./Selector.css";

function Selector() {
  function makeDraggable(event) {
    const svg = event.target;
    svg.addEventListener("mousedown", startDrag);
    svg.addEventListener("mousemove", drag);
    svg.addEventListener("mouseup", endDrag);
    svg.addEventListener("mouseleave", endDrag);

    let selectedElement, offset;

    function getMousePosition(event) {
      const CTM = svg.getScreenCTM();
      return {
        x: (event.clientX - CTM.e) / CTM.a,
        y: (event.clientY - CTM.f) / CTM.d,
      };
    }

    function startDrag(event) {
      if (event.target.classList.contains("draggable")) {
        selectedElement = event.target;
        offset = getMousePosition(event);
        offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
        offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
      }
    }

    function drag(event) {
      if (selectedElement) {
        event.preventDefault();
        const coord = getMousePosition(event);
        selectedElement.setAttributeNS(null, "x", coord.x - offset.x);
        selectedElement.setAttributeNS(null, "y", coord.y - offset.y);
      }
    }

    function endDrag(event) {
      selectedElement = null;
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 20"
      onLoad={makeDraggable}
    >
      <rect x="0" y="0" width="30" height="20" fill="#fafafa" />
      <rect x="4" y="5" width="8" height="10" fill="#007bff" />
      <rect x="18" y="5" width="8" height="10" fill="#888" />
    </svg>
  );
}

export default Selector;
