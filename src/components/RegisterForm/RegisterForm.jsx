import { useNavigate } from "react-router-dom";
import css from "./RegisterForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import x from "../../assets/x.svg"
import * as Yup from "yup"
import { emailPattern} from "../../constans";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const UserShema = Yup.object().shape(
    {
        name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
        email: Yup.string()
        .matches(emailPattern, "Format example@mail.com")
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Enter your email"),
        password:Yup.string()
        .min(8, "Password should be at least 8 characters!")
        .max(50, "Password should be max 64 characters!")
        .required("Enter your password"),
    }
)


export default function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues={
        name: "",
        email: "",
        password: "",
    }

    //**-----відправлення форми реєстрації--- */
    const handleSubmit = async  (values, action) =>{
         dispatch(registerUser(values));
            iziToast.success({
                title: "Success",
                message: "Registration completed successfully!",
                position: 'topCenter',
                timeout: 3000 
            });
            action.resetForm();
            navigate(-1);
        }
    
        const closeHandler = () => {
            navigate(-1); 
        };
    return(
        <div className={css.container} >
                    <div className={css.modal}>
                    <button className={css.closeButton} onClick={closeHandler}>
                        <img src={x} alt="x" />
                    </button>
                    <div>
                        <h2 className={css.title}>Registration</h2>
                        <p className={css.description}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
                    </div>
                    <Formik
                        initialValues={initialValues}
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
                                type="name" 
                                name="name"   
                                placeholder="Name"  
                                />
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="name" 
                                component="span"/>
                                <Field 
                                type="email"   
                                placeholder="Email" 
                                name="email" 
                                className={`${css.input} ${
                                    errors.password && touched.password
                                    ? `${css.inputError} ${css.placeholderError}`
                                    : values.password
                                    ? css.inputFilled
                                    : ""
                                }`}/>
                                <ErrorMessage className={css.errorMessage} name="email" component="span"/>
                                <Field 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className={`${css.input} ${
                                    errors.password && touched.password
                                    ? `${css.inputError} ${css.placeholderError}`
                                    : values.password
                                    ? css.inputFilled
                                    : ""
                                }`}/>
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="password" component="span"/>
                                <button className={css.button} type="submit">Sign Up</button>
                            </Form>)}
                        </Formik>
                    </div>
                </div>
            )
}