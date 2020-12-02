import React, { Component } from 'react'

const App = () => {
  const hello = <p>Hello React!</p>
  const input = (
    <input
      type="button"
      value="click me"
      onClick={() => {
        console.log('I am clicked')
      }}
    />
  )
  const profiles = [{ name: 'Taro', age: 3 }, { name: 'Sake', age: 20 }, {}]
  return (
    <React.Fragment>
      {profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} />
      })}
      {hello}
      {input}
    </React.Fragment>
  )
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

export default App
