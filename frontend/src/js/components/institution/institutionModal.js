import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'

const institutionModal = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    alert('selected ' + key);
    this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Birmingham City University">Tab 1 content</Tab>
        <Tab eventKey={2} title="Blackburn College">Tab 1 content</Tab>
        <Tab eventKey={3} title="Buckinghamshire">Tab 1 content</Tab>
        <Tab eventKey={4} title="Cambridge University">Tab 1 content</Tab>
        <Tab eventKey={5} title="Canterbury Christ Church University">Tab 1 content</Tab>
        <Tab eventKey={5} title="City University">Tab 1 content</Tab>
      </Tabs>
    );
  }
});

export default institutionModal