import React, { Component } from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import ReactDOMServer from "react-dom/server";

class Test extends Component {
  content = (
    <Grid
      columns="equal"
      stackable
      style={{
        margin: "10px 2px",
        padding: "10px 10px",
      }}
    >
      <Grid.Row>
        <Grid.Column style={{ margin: "0px 10px" }}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"
            style={{ width: "100%", height: "450px" }}
          />
        </Grid.Column>
        <Grid.Column style={{ margin: "0px 10px" }}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"
            style={{ width: "100%", height: "450px" }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h2
            style={{
              color: "#19344D",
              fontSize: "22px",
              lineHeight: "35px",
              fontWeight: "700",
            }}
          >
            Full Block Right Page Title Second
          </h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: "0px " }}>
        <Grid.Column>
          <p
            style={{
              color: "#435B6F",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            Although NICE judges the clinical efficiency and cost- effectiveness
            of drugs, it pays closer attention to cost-effectiveness in regards
            to costs associated with the NHS. Although NICE judges the clinical
            efficiency and cost- effectiveness of drugs.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  showHTML = () => {
    const test = ReactDOMServer.renderToStaticMarkup(this.content);
    console.log(test.toString());
    return test.toString();
  };
  state = {
    staticHtml: this.showHTML(),
  };
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.staticHtml }} />;
  }
}

export default Test;
