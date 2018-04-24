import React from 'react'
import PropTypes from 'prop-types'
import './CardEdit.css'

class CardEdit extends React.PureComponent {
  inputRef = React.createRef()

  edit(event) {
    if (event.key !== 'Enter') {
      return
    }
    this.props.editCard(this.inputRef.current.value)
    this.inputRef.current.value = ''
  }

  render() {
    return (
      <div id="card-edit">
        <input
          type="text"
          ref={this.inputRef}
          defaultValue={this.props.card.name}
          onKeyPress={this.edit.bind(this)}
        />
      </div>
    )
  }
}

CardEdit.propTypes = {
  card: PropTypes.object.isRequired,
  editCard: PropTypes.func.isRequired,
}

export default CardEdit
