import { useNavigate } from "react-router-dom";
import css from "./RegisterForm.module.css"
import { Field, Form, Formik } from "formik";
import x from "../../assets/x.svg"
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
                        }}>
                            <Form className={css.form}>
                            <label className={css.label}>
                                <Field type="name" name="name"   placeholder="Name"  className={css.input}/>
                                </label>
                                <label className={css.label}>
                                <Field type="email"   placeholder="Email" name="email" className={css.input}/>
                                </label>
                                <label  className={css.label}>
                                <Field type="email" name="email" placeholder="Password" className={css.input}/>
                                </label>
                                <button className={css.button} type="submit">Sign Up</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            )
}