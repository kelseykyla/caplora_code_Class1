
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myVar: 'my value'
    }
  }



  render() {
    return (
      <div>
        <Header value={this.state.myVar} />
        <Body value={this.state.myVar}/>
        <p>{this.state.myVar}</p>
        <input id='key' onKeyUp={() => this.setState({
          myVar: document.getElementById('key').value
        })} />
      </div>
    )
  }
}



export default App

export function Header(prop) {
  return (<>
    <div className='navigation'>
      <h1>LOGO</h1>
      <ul>
        <li>{prop.value}</li>
        <li>About</li>
        <li>Profile</li>
        <li>Contact</li>
      </ul>

    </div>
  </>)
}
export class Body extends React.Component {
  constructor(props){
    super(props)
    this.props = props
  }
  render(){
    return (<>
      <div className="paragraph">
        <ul id="list">
          <br ></br>
          <hr />
        </ul>
    <h2> {this.props.value}Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris ligula, semper varius orci quis, lacinia
        ornare ante. Nulla a viverra mi, vel auctor nisl. Suspendisse commodo dui eu odio aliquam, ut fermentum ante
        bibendum. Pellentesque maximus vitae dui vel maximus. Quisque nulla tellus, imperdiet vel luctus vel, tristique
        non ex. Nam non neque ut felis tincidunt rhoncus molestie sit amet lacus. Etiam dui ipsum, sollicitudin non
        massa quis, cursus convallis massa. Aenean euismod metus a lacinia convallis. Nulla nec libero at purus blandit
        volutpat id a ante. Sed id erat lorem. Nunc eleifend eleifend lectus ut posuere. Suspendisse sit amet efficitur
          mauris. Praesent non aliquam neque. Nulla nec erat imperdiet, pretium ligula at, iaculis justo.</p>
        <div id="button">
          <button type="button" className="btn btn-danger btn-lg">More</button>
        </div>
      </div>
    </>)
  }
  
}