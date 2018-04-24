import React from 'react'
import PropTypes from 'prop-types'
import './CardEdit.css'

class CardEdit extends React.PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    if (event.key === 'Escape') {
      this.props.closeEdit()
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  edit(event) {
    if (event.key !== 'Enter') {
      return
    }
    this.props.editCard(this.inputRef.current.value)
    this.inputRef.current.value = ''
  }

  remove() {
    this.props.removeCard(this.props.card)
  }

  close(event) {
    if (
      event.target === document.querySelector('#card-edit') ||
      event.target === document.querySelector('.close')
    ) {
      this.props.closeEdit()
    }
  }

  closeByEscape(event) {
    console.log(event)
  }

  render() {
    return (
      <div
        id="card-edit"
        onClick={this.close.bind(this)}
        onKeyPress={this.closeByEscape.bind(this)}>
        <div id="card-edit-content">
          <span className="close">&times;</span>
          <h1>Édition de carte</h1>
          <div className="main-content">
            <textarea
              ref={this.inputRef}
              defaultValue={this.props.card.name}
              onKeyPress={this.edit.bind(this)}
            />
            <div className="actions">
              <h2>Actions</h2>
              <button type="button" onClick={this.remove.bind(this)}>
                Archiver
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CardEdit.propTypes = {
  card: PropTypes.object.isRequired,
  editCard: PropTypes.func.isRequired,
  closeEdit: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
}

export default CardEdit
