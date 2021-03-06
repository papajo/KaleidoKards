import React, { Component } from 'react';
import './launchDesign.scss';
import StarShape from './star.svg';
import CircleShape from './Circle.svg';
import DiamondShape from './Diamond.svg';
import SquareShape from './Square.svg';
import TriangleBlue from './TriangleBlue.png';
import SquareOrange from './SquareOrange.png';
import TrianglePink from './TrianglePink.png';
import SquareGreen from './SquareGreen.png';
import DiamondPink from './DiamondPink.png';
import CircleGreen from './CircleGreen.png';
import StarBlue from './StarBlue.png';

class LaunchDesign extends Component {



    render() {
          
        return (
            <div className="shapes"> 
                <div> 
                   <img src={StarShape} className="star-shape-image"/>
                </div>
                <div>
                    <img src={CircleShape} className="circle-white"/>
                </div> 
                <div> 
                    <img src={SquareGreen} className="square-green-two"/>
                </div>
                <div>
                    <img src={CircleShape} className="circle-shape-right"/>
                </div> 
                <div>
                    <img src={DiamondShape} className="diamond-right-two"/>
                </div> 
                <div>
                    <img src={StarBlue} className="star-blue-two"/>
                </div>
                <div>
                    <img src={DiamondShape} className="diamond-right-three"/>
                </div> 
                <div> 
                    <img src={SquareGreen} className="square-shape-two"/>
                </div>
                <div>
                    <img src={DiamondPink} className="star-shape-design square-pink"/>
                </div>
                <div> 
                   <img src={StarShape} className="star-small-right"/>
                </div>
                <div>
                    <img src={CircleShape} className="circle-opaque"/>
                </div> 
                <div>
                    <img src={StarBlue} className="star-blue"/>
                </div>
                
                <div>
                    <img src={CircleGreen} className="circle-green"/>
                </div> 
                <div> 
                    <img src={TrianglePink} className="triangle-pink-shape"/>
                </div> 
                <div>
                    <img src={CircleShape} className="circle-shape-three"/>
                </div>  
                <div> 
                   <img src={StarShape} className="star-shape-two"/>
                </div>
                <div> 
                   <img src={StarShape}  className="star-three"/>
                </div>
                <div> 
                    <img src={SquareOrange} className="square-orange-color"/>
                </div>
                <div>
                    <img src={CircleGreen} className="circle-green small circle-green-small"/>
                </div> 
                <div>
                    <img src={DiamondShape} className="diamond-right"/>
                </div> 
                <div> 
                    <img src={SquareShape} className="square-shape-one"/>
                </div>
                <div>
                <div> 
                   <img src={StarShape}  className="star-right"/>
                </div>
                    <img src={CircleShape} className="circle-shape-four"/>
                </div> 
                <div className="square-three"> 
                    <img src={SquareShape} className="square-shape-three"/>
                </div>
                <div> 
                    <img src={TrianglePink} className="triangle-shape-two"/>
                </div> 
                <div className="square-four"> 
                    <img src={SquareOrange} className="square-shape-four"/>
                </div>

                <div>
                    <img src={CircleShape} className="circle-shape-one"/>
                </div> 

                <div>
                    <img src={DiamondShape} className="diamond-shape-one"/>
                </div> 

                 <div>
                    <img src={CircleShape} className="circle-shape-two"/>
                </div>  
                <div> 
                    <img src={TriangleBlue} className="triangle-shape-one"/>
                </div> 


                <div className="square-five"> 
                    <img src={SquareShape} className="square-shape-five"/>
                </div>



                


            </div>
        )
    }
}

export default LaunchDesign; 