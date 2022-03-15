import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hola</p>;
}

render(<Hi />, document.getElementById("app"));
