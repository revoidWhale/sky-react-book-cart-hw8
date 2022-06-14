import React from 'react'

class Increment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { current: 1 }
  }

  inc = () => {
    this.setState((prevState) => ({ current: prevState.current + 1 }))
  }

  render() {
    return (
      <div>
        <span>Вы нажали кнопку {this.state.current} раз</span>
        <button type="button" onClick={this.inc}>
          +
        </button>
      </div>
    )
  }
}

export default Increment
