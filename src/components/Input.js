import React from 'react'

const Input = ({ campos }) => {
   
  console.log("desde input ", campos)

    return (
        <>
        {campos.map((c, index) => (
          <div className='my-2 d-flex flex-column'  key={index}>
          { c.type !== ('submit' || 'button') && <label className='text-capitalize'>{c.label}</label>}
           <input 
           type={c.type}
          // placeholder={c.placeholder}
           required={c.required}
           className={ `${c.styles && c.styles}  `}
             value={c.type === "submit" ?  c.placeholder : ""}
            />
            
         </div>

      ))}
        </>
    )
}

export default Input
