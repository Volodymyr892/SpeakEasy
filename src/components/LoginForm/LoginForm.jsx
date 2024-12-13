import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import x from "../../assets/x.svg"
import * as Yup from "yup"
import { emailPattern } from "../../constans";

const UserShema = Yup.object().shape(
    {
        email: Yup.string()
        .matches(emailPattern, "Format example@mail.com")
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
        password:Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }
)

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
                }}
                validationSchema={UserShema}
                >
                    <Form className={css.form}>
                        {/* <label className={css.label}> */}
                        <Field 
                        className={css.input}
                        type="email"   
                        placeholder="Email" 
                        name="email" 
                        />
                        <ErrorMessage 
                        className={css.errorMessage} 
                        name="email" 
                        component="span"/>
                        {/* </label> */}
                        {/* <label  className={css.label}> */}
                        <Field 
                        className={css.input}
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        />
                        <ErrorMessage 
                        className={css.errorMessage} 
                        name="password" 
                        component="span"/>
                        {/* </label> */}
                        <button className={css.button} type="submit">Log in</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}