import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from 'redux-form'

import { deleteEvent, getEvent, putEvent } from '../../actions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

interface Props {
  getEvent: any
  postEvent: any
  putEvent: any
  deleteEvent: any
  match: { params: { id: string } }
  history: string[]
}

class EventsShow extends Component<Props & InjectedFormProps<{}, Props>> {
  constructor(
    props:
      | (Props & InjectedFormProps<{}, Props, string>)
      | Readonly<Props & InjectedFormProps<{}, Props, string>>,
  ) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderField(field: { label: string; type: string } & WrappedFieldProps) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field

    return (
      <TextField
        {...input}
        placeholder={label}
        type={type}
        error={touched && error}
        helperText={error}
      />
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values: any) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            投稿
          </Button>
          <Button variant="contained" href="/">
            キャンセル
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="/"
            onClick={this.onDeleteClick}
          >
            削除
          </Button>
        </div>
      </form>
    )
  }
}

const validate = (values: { title: any; body: any }) => {
  let errors: {
    title?: string
    body?: string
  } = {}

  if (!values.title) errors.title = 'Enter a title, please'
  if (!values.body) errors.body = 'Enter a body, please'
  return errors
}

const mapStateToProps = (
  state: { events: { [x: string]: any } },
  ownProps: { match: { params: { id: string | number } } },
) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}

const mapDispatchToProps = {
  deleteEvent,
  getEvent,
  putEvent,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm<{}, Props>({
    validate,
    form: 'eventShowForm',
    enableReinitialize: true,
  })(EventsShow),
)
