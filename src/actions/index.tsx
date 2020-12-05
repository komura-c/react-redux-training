import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token5555'

export const readEvents = () => async (
  dispatch: (arg0: { type: string; response: Response }) => void,
) => {
  const response: Response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = (values: any) => async (
  dispatch: (arg0: { type: string; response: Response }) => void,
) => {
  const response: Response = await axios.post(
    `${ROOT_URL}/events${QUERYSTRING}`,
    values,
  )
  dispatch({ type: CREATE_EVENT, response })
}

export const deleteEvent = (id: string) => async (
  dispatch: (arg0: { type: any; id: string }) => void,
) => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENT, id })
}
