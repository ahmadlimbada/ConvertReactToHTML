import React, { Component } from 'react';
import {
    Input,
    Grid,
    Segment,
    Button,
  } from 'semantic-ui-react'
import ContentFields from './ContentFields';
import './publishComponent.css';
class Publish extends Component {
    state = { 
      friendly: '',
      slug: '',
     }

    generateURLSlug = e => {
      this.state.friendly = e.target.value;
      const friendly = this.state.friendly;
      this.state.slug = this.state.friendly.trim().toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,'')
      const slug = this.state.slug;
      this.setState({friendly});
      this.setState({slug});
    }

    publishContent = e => {
      alert("Content Publsihed");
    }

    deleteContent = e => {
      alert("Content Deleted");
    }

   
    render() { 
        return (
            <div>
            <Grid columns={2} stackable textAlign='left' >    
              <Grid.Row style={{marginLeft: 50 + 'px',marginRight: 50 + 'px', padding: 20 + 'px'}}>
                <Grid.Column verticalAlign="middle">
                  <a href='#'>Home</a> / <a href='#'>Testimonial List</a> / <a href='#'>Create</a> 
                </Grid.Column>
                <Grid.Column textAlign="right">
                <Button content='Delete' secondary  onClick={this.deleteContent}/>
                <Button content='Publish' primary onClick = {this.publishContent}/>
                
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment style={{marginLeft: 50 + 'px', marginRight: 50 + 'px', padding: 30 + 'px', backgroundColor: '#ececec'}} >
            <Grid columns={2} stackable textAlign='left' >    
              <Grid.Row style={{marginLeft: 50 + 'px',marginRight: 50 + 'px'}}>
                <Grid.Column>
                  <p>Content's Friendly Name</p>
                  <Input placeholder="Friendly Name" className="full-width" onBlur={this.generateURLSlug} content={this.state.friendly}/>
                </Grid.Column>
        
                <Grid.Column>
                  <p>URL Slug</p>
                  <Input placeholder='URL Slug' className="full-width" content={this.state.slug} value={this.state.slug}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <ContentFields />
          </div>
          );
    }
}
 
export default Publish;