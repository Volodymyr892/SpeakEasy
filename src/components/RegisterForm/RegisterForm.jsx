import { useNavigate } from "react-router-dom";
import css from "./RegisterForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import x from "../../assets/x.svg"
import * as Yup from "yup"
import { emailPattern, nameRegExp } from "../../constans";

const UserShema = Yup.object().shape(
    {
        name: Yup.string()
        // .matches(nameRegExp, "Volodymyr" )
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
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


export default function RegisterForm() {
     const navigate = useNavigate();
    
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
                    <Formik initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        }}
                        validationSchema={UserShema}
                        >
                            <Form className={css.form}>
                            {/* <label className={css.label}/> */}
                                <Field
                                className={css.input}
                                type="name" 
                                name="name"   
                                placeholder="Name"  
                                />
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="name" 
                                component="span"/>
                             {/* </label> */}
                                {/* <label className={css.label}> */}
                                <Field 
                                type="email"   
                                placeholder="Email" 
                                name="email" 
                                className={css.input}/>
                                <ErrorMessage className={css.errorMessage} name="email" component="span"/>
                                {/* </label> */}
                                {/* <label  className={css.label}> */}
                                <Field 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className={css.input}/>
                                <ErrorMessage 
                                className={css.errorMessage} 
                                name="password" component="span"/>
                                {/* </label> */}
                                <button className={css.button} type="submit">Sign Up</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            )
}