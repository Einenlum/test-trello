import React from 'react';

class RowNameEdit extends React.Component {
    state = {
        text: this.props.rowName
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        })
    }

    sendText(event) {
        if (event.key !== 'Enter') {
            return
        }

        this.props.updateName(this.state.text.trim("\n"))
    }

    render() {
        return <textarea
            onChange={this.updateText.bind(this)}
            onKeyUp={this.sendText.bind(this)}
            defaultValue={this.props.rowName}
        ></textarea>;
    }
}

export default RowNameEdit;