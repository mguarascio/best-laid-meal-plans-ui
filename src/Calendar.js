import React, { Component } from 'react';

const daysOfWeek = [ 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]

export default class Calendar extends Component {
    render() {
        return (
          <div className='card-group'>
          {
            daysOfWeek.map((day) => {
              return <div className='card'>
                <div className='card-header'>{day}</div>
                <div className='card-body'>foo bar</div>
              </div>
            })
          }
          </div>
        );
    }
}