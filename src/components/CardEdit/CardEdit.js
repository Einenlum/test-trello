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

  close(event) {
    if (
      event.target !== document.querySelector('#card-edit') &&
      event.target !== document.querySelector('.close')
    ) {
      return
    }

    this.props.closeEdit()
  }

  render() {
    return (
      <div id="card-edit" onClick={this.close.bind(this)}>
        <div id="card-edit-content">
          <span className="close">&times;</span>
          <h1>Édition de carte</h1>
          <textarea
            ref={this.inputRef}
            defaultValue={this.props.card.name}
            onKeyPress={this.edit.bind(this)}
          />
        </div>
      </div>
    )
  }
}

CardEdit.propTypes = {
  card: PropTypes.object.isRequired,
  editCard: PropTypes.func.isRequired,
  closeEdit: PropTypes.func.isRequired,
}

export default CardEdit
