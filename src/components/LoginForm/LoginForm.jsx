import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import x from "../../assets/x.svg"
import * as Yup from "yup"
import { emailPattern } from "../../constans";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const UserShema = Yup.object().shape(
    {
        email: Yup.string()
        .matches(emailPattern, "Format example@mail.com")
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Enter your email"),
        password:Yup.string()
        .min(3, "Password should be at least 8 characters!")
        .max(50, "Password should be max 64 characters!")
        .required("Enter your password"),
    }
)

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //**------відправленя форми логіну---*/
    const handleSubmit = (values, actions) => {
        dispatch(loginUser(values));
        iziToast.success({
            title: "Success",
            message: "Login completed successfully!",
            position: 'topCenter',
            timeout: 3000 
        });
        actions.resetForm();
        navigate(-1)
    }

    const initialValues={
        email: "",
        password: "",
        }

    //**-----поверненя на минулу сторінку---*/
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
            <Formik initialValues={initialValues}
                validationSchema={UserShema}
                onSubmit={handleSubmit}
                >
                    {({errors, touched, values})=> (<Form className={css.form}>
                        <Field 
                        className={`${css.input} ${
                            errors.password && touched.password
                            ? `${css.inputError} ${css.placeholderError}`
                            : values.password
                            ? css.inputFilled
                            : ""
                        }`}
                        type="email"   
                        placeholder="Email" 
                        name="email" 
                        />
                        <ErrorMessage 
                        className={css.errorMessage} 
                        name="email" 
                        component="span"/>
                        <Field 
                        className={`${css.input} ${
                        errors.password && touched.password
                        ? `${css.inputError} ${css.placeholderError}`
                        : values.password
                        ? css.inputFilled
                        : ""
                        }`} 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        />
                        <ErrorMessage 
                        className={css.errorMessage} 
                        name="password" 
                        component="span"/>
                        <button className={css.button} type="submit">Log in</button>
                    </Form>)}
                </Formik>
            </div>
        </div>
    )
}