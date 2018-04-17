import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";
// import TestComponent from "./components/TestComponent";
import MonacoEditor from "./components/MonacoEditor";

const jsonFile = '{\n  "simple": true\n}';

ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />,
    <MonacoEditor customText={jsonFile}/>,
    document.getElementById("app"),
);
