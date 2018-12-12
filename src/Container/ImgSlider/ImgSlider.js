import React, { Component } from 'react';
import Card from '../../Component/Card'
import data from './data'
import './imgSlider.css'

class ImgSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: [data.properties[0], data.properties[1], data.properties[2], data.properties[3]]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property[3].index + 1;
    let items = this.state.property
    items.shift();
    items.push(data.properties[newIndex])
    console.log(items)
    this.setState({
      property: items
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property[0].index - 1;
    let items = this.state.property
    items.pop()
    items.unshift(data.properties[newIndex])
    this.setState({
      property: items
    })
  }


  render() {
    const { property } = this.state;
    return (
      <div className="ImgSlider"  >



        <button
          onClick={() => this.prevProperty()}
          disabled={property[0].index === 0}
        ><i className="fa fa-angle-left fa-5x" ></i></button>
        <div className="page">
          {property.map((prop, index) =>
            <Card key={index} property={prop} />

          )}

        </div>

        <button
          onClick={() => this.nextProperty()}

          disabled={property[3].index === data.properties.length - 1}
        ><i class="fa fa-angle-right fa-5x"></i></button>


      </div>
    )

  }
}

export default ImgSlider;