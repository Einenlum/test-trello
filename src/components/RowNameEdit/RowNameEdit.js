import React from 'react'
import PropTypes from 'prop-types'

class RowNameEdit extends React.Component {
  state = {
    text: this.props.rowName,
  }

  updateText(event) {
    this.setState({
      text: event.target.value,
    })
  }

  sendText(event) {
    if (event.key !== 'Enter') {
      return
    }

    this.props.updateName(this.state.text.trim('\n'))
  }

  render() {
    return (
      <textarea
        onChange={this.updateText.bind(this)}
        onKeyUp={this.sendText.bind(this)}
        defaultValue={this.props.rowName}
      />
    )
  }
}

RowNameEdit.propTypes = {
  rowName: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
}

export default RowNameEdit
