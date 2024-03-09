import React, {useEffect, useState} from 'react'

export function Input({label, ...rest}) {
  return (
    <>
        <div>
            <label>{label}</label>
        </div>
        <input {...rest}></input>
    </>
  )
}


