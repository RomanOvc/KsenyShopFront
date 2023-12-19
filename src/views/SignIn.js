import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  console.log(login)

  console.log(password)
  return (
    <div>
      <form>
        <div>
          <label>Username </label>
          <input type="text" name="uname" 
           onChange={(e)=> setLogin(e.target.value)}
           required  />
        </div>

        <div>
          <label> Password </label>
          <input type="password" name="password" required             
          onChange={(e)=> setPassword(e.target.value)}/>
        </div>

        <div>
          <button> Отправить</button>
        </div>
        <div>
          <label>У вас нет аккаунта?</label>
          <Link to={"/register"}>Регистрация</Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn