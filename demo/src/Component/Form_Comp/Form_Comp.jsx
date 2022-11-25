import React from 'react'
import E_mail from '../E_mail/E_mail'
import Parol from '../Parol/Parol'
import Login_btn from '../Login_btn/Login_btn'
import '../Form_Comp/Form_Comp.css'
const Form = () => {
    return (
        <div className='formComp'>
            <form autoComplete='off'>
                <E_mail />
                <Parol />
                <Login_btn />
            </form>

        </div>
    )
}

export default Form
