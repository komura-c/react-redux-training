import React, { Component } from 'react'

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

class App extends Component {
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
        {this.profiles.map((profile, i) => {
          return <User key={i} name={profile.name} age={profile.age} />
        })}
      </React.Fragment>
    )
  }
}

export default App
