import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postEvent } from '../../actions'
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from 'redux-form'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

interface Props {
  postEvent: any
  history: string[]
}

class EventsNew extends Component<Props & InjectedFormProps<{}, Props>> {
  constructor(
    props:
      | (Props & InjectedFormProps<{}, Props, string>)
      | Readonly<Props & InjectedFormProps<{}, Props, string>>,
  ) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values: any) {
    await this.props.postEvent(values)
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

const mapDispatchToProps = {
  postEvent,
}

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm<{}, Props>({ validate, form: 'eventNewForm' })(EventsNew),
)
