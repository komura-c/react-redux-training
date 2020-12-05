import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { postEvents } from '../../actions'
// import { Link } from 'react-router-dom'

interface Event {
  id: string
  title: string
  body: string
}

interface Props {
  readEvents: any
  events: Event[]
}

class EventsNew extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <div>post new</div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = {
//   readEvents,
// }

export default connect(null, null)(EventsNew)
