import { Link } from "react-router-dom"
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    rePass:''
  }, onRegisterSubmit)
  return (
    <section id="register">
      <div className="form">
        <h2>Регистрирай се</h2>
        <form className="login-form" method="POST" onSubmit={onSubmit}>
          <input type="text" name="email" id="register-email" placeholder="email" value={values.email} onChange={changeHandler} /> 
          <input type="password" name="password"  placeholder="парола" value={values.password}  onChange={changeHandler}/>
          <input type="password" name="rePass" placeholder="повтори паролата" value={values.rePass}  onChange={changeHandler}/>
          <button type="submit">Регистрирай се</button>
          <p className="message">Вече сте регистриран? <Link to="/login">Влезте в профила си</Link></p>
        </form>
      </div>
    </section>
  )
}