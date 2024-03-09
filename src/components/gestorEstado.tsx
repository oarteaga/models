import React from 'react'
import { useFormData } from './../hooks/hookGestorForm.tsx'
import { Input } from './input.tsx'

export function GestorEstado() {
  const [formValues, handleChange] = useFormData({name: 'omarcito'})
  console.log(formValues)
  return (
    <form>
        <Input label='sss' name={'name'} onChange={handleChange} placeholder={'texto aqui'} value={formValues.name}></Input>
    </form>
  )
}
