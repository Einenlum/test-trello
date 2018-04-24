import React from 'react'

class RowName extends React.Component {
  enableEditName() {
    this.props.enableEdit()
  }

  render() {
    return <h1 onClick={this.enableEditName.bind(this)}>{this.props.name}</h1>
  }
}

export default RowName
