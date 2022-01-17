import React from 'react'

const Button = ({className, type, label, onClick, btnClassName }) => {
    return (
        <>
         <div className={className}>
            <button className={btnClassName} type={type} onClick={onClick ? onClick : null}>
              {label}
            </button>
          </div>
            
        </>
    )
}

export default Button