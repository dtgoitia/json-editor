import * as React from "react";

export default class TestComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
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
      </div>
    )
  }
}

// export default TestComponent