import * as monaco from "@timkendrick/monaco-editor";
import * as React from "react";

export default class MonacoEditor extends React.Component<any, any> {
  private editor = monaco.editor;
  constructor(props: any) {
    super(props);
    this.onTap = this.onTap.bind(this);
  }

  public componentDidMount() {
    const emptyDiv = document.getElementById("monaco-container");
    const options = {
      automaticLayout: true,
      language: "json",
      value: this.props.customText,
    };
    this.editor.create(emptyDiv, options);

    emptyDiv.style.height = "500px";
  }

  public onTap() {
    const newValue = "aaaaa";
    this.setState({
      value: newValue,
    });
    /* tslint:disable-next-line:no-console */
    console.log("clicked!!!");
    /* tslint:disable-next-line:no-console */
    console.log("newValue =", newValue);
  }
  public render() {
    return (
      <div>
        <h2 onClick={this.onTap}>This is a TestCopmonent</h2>
        <p>
          And this:
          <br />
          <i>{this.props.customText}</i>
          <br />
          is the custom text.
        </p>
        <div id={"monaco-container"} />
        <p>Monaco editor should appear above</p>
      </div>
    );
  }
}
