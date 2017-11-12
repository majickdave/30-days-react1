import React, {Component} from 'react'; // This is the change

class Content extends Component { // and this allows us
                                         // to not call React.Component
                                         // but instead use just
                                         // the Component class
  render() {
    return <p className="App-intro">Content goes here</p>;
  }
}

export default Content;
