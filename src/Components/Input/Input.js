import React , {useState} from "react";
import "./Input.scss";

const Input = ({
    type="text",
    value = null,
    onChange = () => {},
    onBlur = () => {},
    className = "",
    placeholder="",
    label = ""

}) => {

    const dir = {
        direction:"rtl"
    }
    // const []
    return(
        <div className=" INPUT d-flex flex-column  m-1 ">
            <label className="text-end form-label">{label}</label>
            <input className={className} type={type}  value={value} onBlur={onBlur} onChange={onChange} placeholder={placeholder}/>
        </div>
    );
}

export default Input;