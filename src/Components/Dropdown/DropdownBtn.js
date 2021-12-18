import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from "react-router-dom"
function DropdownBtn({
    items = [{title : "" , href : ""}],
    name = "",
    variant = "",
    className="",
    direction = "",
    size="",


}) {
    // const items = [{a : "one" , dropKey : 1},
    // {a : "two" , dropKey : 2},
    // {a : "three" , dropKey : 3}]
    return (
        <div className="mb-2">
            <DropdownButton
                className={className}
                // as={ButtonGroup}
                // key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant={variant}
                title={name}
                size={size}
            >
                {items.map((i)=> (
                    <Dropdown.Item eventKey={i.title}><Link to={`/${i.href}`}>{i.title}</Link></Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    )
}

export default DropdownBtn
