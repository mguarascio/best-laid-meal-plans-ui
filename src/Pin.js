import React, { Component } from 'react';

export default class Pin extends Component {
    render() {
        return (
            <div className='card bg-light'>
              <img className="card-img-top" alt={this.props.pin.url} src={this.props.pin.image} width="100" height="100"/>
              <div className="card-body">
                  <p className='card-text'>
                    {this.props.pin.title}   
                  </p>
              </div>
            </div>
        );
    }
}

// {
//         "id": "272749321163171462",
//         "url": "https://www.pinterest.com/pin/272749321163171462/",
//         "note": "Rebecca Katz, author of the new cookbook Clean Soups: Simple, Nourishing Recipes for Health and Vitality (Ten Speed Press), half-jokingly calls herself a “soup shaman.” She’s certainly an evangelist for the healing powers of a delicious bowl of hot soup. “I came by my love of soup-making honestly. It’s in my blood,” says Katz, who [...]",
//         "image": "https://s-media-cache-ak0.pinimg.com/originals/52/5b/e0/525be0b8b00a83ebb9b30715662fe0bf.jpg",
//         "title": "Coconut Curry Soup with Ginger and Turmeric"
// }