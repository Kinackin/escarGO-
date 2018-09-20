// @flow weak

import React, { PureComponent } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import './App.css';

import redSnail from './images/redSnail.png';
import greenSnail from './images/greenSnail.png';
import blueSnail from './images/blueSnail.png';
import orangeSnail from './images/orangeSnail.png';
import yellowSnail from './images/yellowSnail.png';
import pinkSnail from './images/pinkSnail.png';
import purpleSnail from './images/purpleSnail.png';
import limeSnail from './images/limeSnail.png';
import cyanSnail from './images/cyanSnail.png';
import brownSnail from './images/brownSnail.png';
import blackSnail from './images/blackSnail.png';



const trackStyles = {
  borderRadius: 4,
  backgroundColor: 'rgb(240, 240, 232)',
  position: 'relative',
  margin: '10px 10px 10px 10px',
  width: '100%',
  height: 50,

  //opacity: 1, 
 
};

class Example extends PureComponent {
    constructor(props){
     super(props);
     console.log(this.props.snailColour);
     let snailChoice = null; 
     switch(this.props.snailColour){
        case 'red': 
        snailChoice = "./images/redSnail.png"
        break;
        case 'green':
        snailChoice = "./images/greenSnail.png"
        break;
        case 'blue':
        snailChoice = "./images/blueSnail.png";
        break;
        default :
        snailChoice = "DEFAULT";
    }
    this.state = {
    open: false,
    snailColour: snailChoice,
      
    }
   
  

} // end of constructor

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        {/* <button
          onClick={this.handleClick}
        >
         EscarGO!
        </button> */}

       <Animate
          start={() => ({
            x: 0,
          })}

          update={() => ({
            x: [this.state.open ? 1000 : 0],
            timing: { duration: 2000, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state;
           // console.log(this.state.snailChoice);
           console.log(this.state.snailColour);
            return (
              <div className='Path-Settings' style={trackStyles}>
             
              <img src={this.state.snailColour}
          
                    style={{
                  position: 'absolute',
                    width: 50,
                    height: '90%',
                    borderRadius: 4,
            
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,

              }}>
              </img>
              </div>

             
            );
          }}
        </Animate>
      </div>
    );
  }
}

export default Example;