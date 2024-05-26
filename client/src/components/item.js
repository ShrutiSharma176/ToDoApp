import React from 'react'

export default function Item({text,desc,dueDate,remove,update}) {
  return (
    <div className='item'>
        <div className='text'>
          <h3>{text}</h3>
          <p>{desc}</p><p>{dueDate}</p>          
        </div>
        <div className='icons'>
        <i className="ri-pencil-fill" onClick={update}></i>
        <i className="ri-delete-bin-7-fill" onClick={remove}></i>
        </div>
    </div>
  )
}
