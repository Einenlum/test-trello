import React from 'react'


class RowItemAdd extends React.Component {
    add(event) {
        if (event.key !== 'Enter') {
            return
        }
        this.props.addItem(this.refs.newItemContent.value)
        this.refs.newItemContent.value = ''
    }
    
    render() {
        return (
            <form onSubmit={e => { e.preventDefault() }}>
                <input type="text" ref="newItemContent" onKeyUp={this.add.bind(this)}/>
            </form>
        )
    }
}

export default RowItemAdd