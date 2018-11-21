// Code CoordinatesButton Component Here
import React, {Component} from 'react'

 class CoordinatesButton extends Component{

   mouseLocation = (event) => {
     this.props.onReceiveCoordinates([event.clientX,event.clientY] )
   }
   render(){
     return(
       <button onClick={this.mouseLocation}>Coordinates: </button>
     )
   }
 }


export default CoordinatesButton;
