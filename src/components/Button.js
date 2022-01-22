import React from 'react'

const Button = ({boton}) => {
    const {texto, styles,type} = boton;

  


    return (
        <>
            <button 
              className={styles}
              type={type}>
                 {texto}
            </button>
            
        </>
    )
}

export default Button
