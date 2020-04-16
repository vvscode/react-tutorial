import React from "react";
import { render } from "react-dom";

import { ClickCounter } from "./components/ClickCounter/ClickCounter";

render(<ClickCounter start={1} />, document.getElementById("root"));
