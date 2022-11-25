import React from 'react'

const Parol = () => {
  const passwordFocus=()=>{
    console.log('Ən azı 8 simvol')
  }
  return (
    <div>
    <label htmlFor="password">Password: </label>
    <input onFocus={passwordFocus} type="password" name="password" id="password" />
    </div>
  )
}

export default Parol
