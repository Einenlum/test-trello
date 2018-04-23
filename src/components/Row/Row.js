import React from 'react'
import RowItem from '../RowItem/RowItem'
import RowNameEdit from '../RowNameEdit/RowNameEdit'
import RowName from '../RowName/RowName'
import RowItemAdd from '../RowItemAdd/RowItemAdd'
import './Row.css'

class Row extends React.Component {
    renderTitle() {
        if (this.props.row.editing) {
            return <RowNameEdit rowName={this.props.row.name} updateName={this.props.updateName} />
        }
        
        return <RowName enableEdit={this.props.enableEdit} name={this.props.row.name} />
    }

    render() {
        return (
            <div className="row">
                {this.renderTitle()}
                <div className="items-list">
                    {this.props.row.items.map((item) => {
                        return (
                            <RowItem
                                removeItem={this.props.removeItem}
                                item={item}
                                key={item.id}
                            />
                        )
                    })}
                    <RowItemAdd addItem={this.props.addItem} />
                </div>
            </div>
        )
    }
}

export default Row