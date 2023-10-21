import React from 'react'

type CounterProps = {
  title: string
}

type State = {
  count: number
}

export default class Counter extends React.Component<CounterProps, State> {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <span>{this.state.count}</span>
        <button type="button" onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))}>
          +
        </button>
      </div>
    )
  }
}
