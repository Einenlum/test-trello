import React from 'react'
import PropTypes from 'prop-types'

class CardAdd extends React.PureComponent {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  add(event) {
    if (event.key !== 'Enter') {
      return
    }
    this.props.addCard(this.inputRef.current.value)
    this.inputRef.current.value = ''
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        <input type="text" ref={this.inputRef} onKeyUp={this.add.bind(this)} />
      </form>
    )
  }
}

CardAdd.propTypes = {
  addCard: PropTypes.func.isRequired,
}

export default CardAdd
