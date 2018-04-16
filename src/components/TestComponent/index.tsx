import * as React from "react";
import * as monaco from '@timkendrick/monaco-editor';





export default class TestComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    const emptyDiv = document.getElementById("emptyDiv");
    const options = {
      value: "aslñkdmfnlkjsandlfjnskdjf",
      automaticLayout: true
    }
    monaco.editor.create(emptyDiv, options);

    emptyDiv.style.height = '500px';
  }

  public render() {
    return (
      <div>
        <h2>This is a TestCopmonent</h2>
        <p>
          And this:
          <br />
          <i>{this.props.customText}</i>
          <br />
          is the custom text.
        </p>
        <div id={"emptyDiv"}></div>
        <p>Monaco editor should appear above</p>
      </div>
    )
  }
}

// export default TestComponent