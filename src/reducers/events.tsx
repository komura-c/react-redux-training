import _ from 'lodash'
import {
  READ_EVENTS,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
  CREATE_EVENT,
} from '../actions'

export default function readEvents(
  events: { [x: string]: any } = {},
  action: { type: any; response: { data: any }; id: string },
): {} {
  switch (action.type) {
    case READ_EVENT:
    case UPDATE_EVENT:
    case CREATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
