import{Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';


export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        email:'',
        password:''
    }, onLoginSubmit)
    return (
        <section id="login" >
            <div className="form">
                <h2>Влезте в профила си</h2>
                <form className="login-form" method="POST" onSubmit={onSubmit}>
                    <input type="text" name="email" placeholder="email" value={values.email} onChange={changeHandler} />
                    <input type="password" name="password" placeholder="password" value={values.password} onChange={changeHandler}/>
                    <button type="submit">Влез в профила си</button>
                    <p className="message">
                        Не сте регестрирани? <Link to="/register">Регистрирайте се</Link>
                    </p>
                </form>
            </div>
        </section>
    )

}