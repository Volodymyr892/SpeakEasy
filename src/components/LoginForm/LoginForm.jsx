import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css"
import { Field, Form, Formik } from "formik";
import x from "../../assets/x.svg"
export default function LoginForm() {
    const navigate = useNavigate();

    const closeHandler = () => {
      navigate(-1)
    };
    return(
        <div className={css.container} >
            <div className={css.modal}>
            <button className={css.closeButton} onClick={closeHandler}>
                <img src={x} alt="x" />
            </button>
            <div>
                <h2 className={css.title}>Log In</h2>
                <p className={css.description}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            </div>
            <Formik initialValues={{
                email: "",
                password: "",
                }}>
                    <Form className={css.form}>
                        <label className={css.label}>
                        <Field type="email"   placeholder="Email" name="email" className={css.input}/>
                        </label>
                        <label  className={css.label}>
                        <Field type="email" name="email" placeholder="Password" className={css.input}/>
                        </label>
                        <button className={css.button} type="submit">Log in</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}