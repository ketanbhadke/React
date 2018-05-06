import React, { Component } from 'react';
import logo from './logo.svg';
import { Header} from './components/Header';
import { Home } from './components/Home';
import { API } from './components/API';
import './App.css';

class App extends React.Component {

  constructor(props){
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  onGreet(){
    alert("Hello ");
  }

  onChangeLink(newLink) {
    this.setState({
      homeLink: newLink
    });
  }

  render() {
    //props passing data/info/propertiers from aone component like fronm here App to another compomnet like Header/home
    var user = {
      name: "Ketan",
      hobbies: ["travelling","reading"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <hr/>
        <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
        {/* Below line for passing data via props only */}
        {/* <Home name={"MyName"} age={23} user={user}/> */}

      {/* This one for with props and also pass data without using props (<p>) */}
        <Home name={"MyName"} 
              initialAge={23} 
              user={user} 
              greet={this.onGreet}
              changeLink={this.onChangeLink.bind(this)}
              initialLink={this.state.homeLink}
              >
          <p>hi this is passing data without props!</p>
        </Home>

      <API />

          {/* <Home /> */}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
