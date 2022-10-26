import React, { useState, useEffect } from 'react';
import './InputControl.scss';
import eye from '../../assets/images/eye.svg'


function InputControl({title, type, placeholder, name,textArea, value, errors }) {

    return (
        <div className='inputControl'>
            <h3 className='label'>{title}</h3>
            <div className="input">
                {!textArea ?
                    <>
                        <input required value={value} name={name} type={type} placeholder={placeholder} />
                    </> :
                    <textarea name={name} placeholder={placeholder}></textarea>
                }
            </div>
        </div>
    )
}

export default InputControl