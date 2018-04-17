import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";
import TestComponent from "./components/TestComponent";

ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />,
    <TestComponent customText="lkasjdfnlksjadnflkjsadnfkl"/>,
    document.getElementById("example"),
);
