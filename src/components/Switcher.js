import React, { PropTypes } from 'react'

const activeStyle = {color: 'red'};

function Switcher(props) {
    const menuItems = props.items.map(item => {
        return (
            <span style = {item == props.active ? activeStyle : {}}
                  key = {item}
                  onClick = {handleClick(props.onChange, item)}
                  className="language"
            >
                {item}
            </span>
        )});

    return (
        <div className="col-xs-4 pull-right switcher">
            {menuItems}
        </div>
    )
}

function handleClick(onChange, item) {
    return () => onChange(item)
}

Switcher.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func,
    active: PropTypes.string
};

export default Switcher

