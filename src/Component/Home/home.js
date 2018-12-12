
import React, { Component } from 'react';
import './home.css'
import img from '../../pic/placeimg_640_480_any.jpg'
import img1 from '../../pic/placeimg_640_480_animals.jpg'
import img2 from '../../pic/placeimg_640_480_nature.jpg'
import ImgSlider from '../../Container/ImgSlider/ImgSlider'


export default class Home extends Component {


    render() {
        return (
            <div className="body">
                <div>
                    <center>
                        <div>
                            <img className="backimg" width="600" height="400" src={img} alt="img" />
                            <img className="backimg" width="600" height="400" src={img1} alt="img" />
                            <center>
                                <img className="topimg" width="150" height="150" src={img2} alt="img" />
                            </center>
                        </div>
                    </center>
                </div>
                <hr height="2px" width="99%" />
                <div>
                    <ImgSlider />
                </div>
            </div>
        )
    }
}