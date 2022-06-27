import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './TimelineEvent.css'

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class TimelineEvent extends Component {

  render() {
    const {event, isPrev, isNext} = this.props;
    
    if( ! event ) {
      return (
      <div className="TimelineEvent">
        {isNext ?
          <div className="subtitle">Next meeting:</div>
          :
          <div className="subtitle">Previous meeting:</div>
        }
        <div className="title">Free Meeting Room</div>
      </div>
      )
    }

    const startDate = event ? moment(event.start) : null;
    const endDate = event ? moment(event.end) : null;
    const duration = endDate.diff(startDate, 'minutes');
    const now = moment();

    if( event.available ) {
      return (
        <div className="TimelineEvent">
          {isNext ?
            now.isSame(startDate, 'day') ?
              <div className="subtitle">Starting at {startDate.format('HH:mm')}hs</div>
              :
              <div className="subtitle">From {startDate.format('dddd')} to {startDate.format('HH:mm')}hs</div>
            :
            now.isSame(endDate, 'day') ?
              <div className="subtitle">Previously from {endDate.format('HH:mm')}hs</div>
              :
              <div className="subtitle">Previously {endDate.format('dddd')} from {endDate.format('HH:mm')}hs</div>
          }
          {isNext ? 
            now.isSame(endDate, 'day') ?
              <div className="title">Free meeting room for {duration >= 120 ? `${Math.floor(duration/60)} hours` : `${duration} minutes`}</div>
              :
              <div className="title">The rest of the day free meeting room</div>
            :
            <div className="title">Free meeting room</div>
          }
        </div>
      )
    }

    return (
      <div className="TimelineEvent">
        {isNext ?
          now.isSame(startDate, 'day') ?
            <div className="subtitle">Next meeting from {startDate.format('HH:mm')} to {endDate.format('HH:mm')}hs</div>
            :
            now.clone().add(1, 'day').isSame(startDate, 'day') ?
              <div className="subtitle">Next meeting tomorrow from {startDate.format('HH:mm')} to {endDate.format('HH:mm')}hs</div>
              :
              <div className="subtitle">Next meeting {startDate.format('dddd')} from {startDate.format('HH:mm')} to {endDate.format('HH:mm')}hs</div>
          :
          now.isSame(endDate, 'day') ?
            <div className="subtitle">Previous meeting was from {startDate.format('HH:mm')} to {endDate.format('HH:mm')}hs</div>
            :
            now.clone().add(-1, 'day').isSame(startDate, 'day') ?
              <div className="subtitle">Yesterday's Last meeting was from {startDate.format('HH:mm')} to {endDate.format('HH:mm')}hs</div>
              :
              <div className="subtitle">A long time ago last meeting was...</div>
        }
        <div className="title">{event.summary}</div>
      </div>
    )
  }

}
