import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

interface Event {
  id: string
  title: string
  body: string
}

interface Props {
  readEvents: any
  events: Event[]
}

class EventsIndex extends Component<Props> {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>タイトル</TableCell>
                <TableCell>本文</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{this.renderEvents()}</TableBody>
          </Table>
        </TableContainer>
        <Fab color="primary" aria-label="add" href="/events/new">
          <AddIcon />
        </Fab>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: { events: Event[] }) => ({
  events: state.events,
})
const mapDispatchToProps = {
  readEvents,
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
