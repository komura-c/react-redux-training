import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

interface Props {
  value: number
  increment: typeof increment
  decrement: typeof decrement
}

const User = (props: { name?: string; age?: number }) => {
  return (
    <p>
      {props.name} {props.age}
    </p>
  )
}

User.defaultProps = {
  name: 'Noname',
  age: '0',
}

class App extends Component<Props> {
  hello = (<p>Hello React!</p>)
  input = (
    <input
      type="button"
      value="click me"
      onClick={() => {
        console.log('I am clicked')
      }}
    />
  )
  profiles = [{ name: 'Taro', age: 3 }, { name: 'Sake', age: 20 }, {}]
  render() {
    return (
      <React.Fragment>
        {this.hello}
        {this.input}
        {this.profiles.map((profile) => {
          return <User name={profile.name} age={profile.age} />
        })}
        <div>value: {this.props.value}</div>
        <button onClick={this.props.increment}>増やす</button>
        <button onClick={this.props.decrement}>減らす</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: { count: { value: any } }) => ({
  value: state.count.value,
})
const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
