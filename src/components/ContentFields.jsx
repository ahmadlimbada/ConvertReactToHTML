import React, { Component, useRef } from "react";
import Form from '@rjsf/semantic-ui';
import './contentFields.css'
import { Grid, Input, Button, Rating, TextArea } from "semantic-ui-react";

class ContentFields extends Component {
  fileInputRef = React.createRef();
  state = {};
  updateContent = e => {
    alert("Content Updated");
  }

  getSchema(){
    return  {
      type: "object",
      properties: {
        name: {
          type: "string",
          title: "Name"
        },
        userImage: {
          type: "string",
          format: "data-url",
          title: "User Image"
        },
        feedback:{
          type: "string",
          title: "Feedback",

        },
        rating:{
          type: "number",
          title: "Ratings"
        }
      }
    };
  }
  

  render() {
    /*const uiSchema = {
      feedback:{
        classNames: "spacing test",
        "ui:widget": "textarea",
        "ui:options": {
          "rows": 5
        },
       
    },

  }
    const schema = this.getSchema();
    
    return (<Form schema={schema} uiSchema={uiSchema} />);
    */return (
      <Grid
        columns={1}
        stackable
        textAlign="left"
        style={{
          marginLeft: 50 + "px",
          marginRight: 50 + "px",
          padding: 30 + "px",
        }}
      >
        <Grid.Row style={{ marginLeft: 50 + "px" }}>
          <Grid.Column>
            <p>Name</p>
            <Input placeholder="Name" className="full-width" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginLeft: 50 + "px" }}>
          <Grid.Column>
            <p>User's Image</p>
            <Button
              content="Choose File"
              labelPosition="left"
              icon="file"
              onClick={() => this.fileInputRef.current.click()}
            />
            <input
              ref={this.fileInputRef}
              type="file"
              hidden
              onChange={this.fileChange}
            />
            <input type="file" hidden />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginLeft: 50 + "px" }}>
          <Grid.Column>
            <p>Feedback</p>
            <TextArea style={{ minHeight: 100 }} className="full-width" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginLeft: 50 + "px" }}>
          <Grid.Column>
            <p>Rating</p>
            <Rating icon="star" defaultRating={2} maxRating={5} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginLeft: 50 + "px" }}>
          <Grid.Column>
            <Button secondary content="Save" onClick={this.updateContent}></Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ContentFields;
