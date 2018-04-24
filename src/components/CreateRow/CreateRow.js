import React from 'react'
import PropTypes from 'prop-types'

class CreateRow extends React.PureComponent {
  inputRef = React.createRef()

  create(event) {
    if (event.key !== 'Enter') {
      return
    }

    this.props.createRow(this.inputRef.current.value)
    this.inputRef.current.value = ''
  }

  render() {
    return (
      <input
        type="text"
        ref={this.inputRef}
        onKeyPress={this.create.bind(this)}
      />
    )
  }
}

CreateRow.propTypes = {
  createRow: PropTypes.func.isRequired,
}

export default CreateRow
