import React from 'react'

const E_mail = () => {
    const focusFunc=()=>{
        console.log('Yalnız .ru domenlərinə icazə verilir.')
    }
  return (
    <div><label htmlFor="email">Email: </label>
      <input onFocus={focusFunc} type="email" name="email" id="email" />
    </div>
  )
}

export default E_mail
