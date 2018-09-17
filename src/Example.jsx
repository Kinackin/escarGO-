// @flow weak

import React, { PureComponent } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

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
  height: 100,
};

class Example extends PureComponent {
    constructor(props){
     super(props);
     console.log(this.props.snailColour);
     let snailChoice = null; 
     switch(this.props.snailColour){
        case 'red': 
        snailChoice = "/images/redSnail.png"
        break;
        case 'green':
        snailChoice = "/images/greenSnail.png"
        break;
        case 'blue':
        snailChoice = "/images/blueSnail.png";
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
        <button
          onClick={this.handleClick}
        >
          escarGO!
        </button>
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
            console.log(this.state.snailChoice);
            return (
              <div style={trackStyles}>
              <img src={redSnail}
                    style={{
                  position: 'absolute',
                    width: 90,
                    height: '90%',
                    borderRadius: 4,
                    opacity: 0.7,
                    // backgroundColor: '#00cf77',
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