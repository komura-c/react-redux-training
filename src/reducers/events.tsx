import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default function readEvents(
  events = {},
  action: { type: any; response: { data: any } },
): {} {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
