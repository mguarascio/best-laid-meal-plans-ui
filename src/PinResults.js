import React, { Component } from 'react';
import Pin from './Pin';

export default class PinResults extends Component {
    render() {
        var rows = [];
        this.props.pins.forEach(function(pin) {
          rows.push(<Pin pin={pin} key={pin.id}/>);
        });
        return (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Img</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
    }
}