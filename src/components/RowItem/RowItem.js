import React from 'react';
import './RowItem.css';

const rowItem = ({item, removeItem}) => {
    const remove = () => {
        removeItem(item)
    }

    return (
        <div class="row-item">
            <p>({item.position}) {item.name} <button type="button" onClick={remove.bind(this)} >X</button></p>
        </div>
    )
}

export default rowItem;