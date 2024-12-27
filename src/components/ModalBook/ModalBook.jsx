import css from "./ModalBook.module.css"
import x from "../../assets/x.svg"
import { useState } from "react";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default function ModalBook({onClose, foto}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        teacher: `${foto.name} ${foto.surname}`
        });

        //**-----Масив для рядіо кнопок */
        const reason = ["career and business", " Lesson for kids", "Living abroad", "Exams and coursework", "Culture, travel or hobby"]
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        };
    
        const handleReasonChange = (e) => {
            setFormData((prev) => ({ ...prev, reason: e.target.value }));
        };

        //**-----відправлення форми про урок--- */
        const handleSubmit = (e) => {
            e.preventDefault(); 
            localStorage.setItem("modalFormData", JSON.stringify(formData)); 
            iziToast.success({
                title: "Success",
                message: "Book trial lesson completed successfully!",
                position: 'topCenter',
                timeout: 3000 
            });
            onClose(); 
        };

    return(
        <div className={css.container} >
        <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
        <img src={x} alt="x" />
        </button>
            <div className={css.containerTitle}>
                <h2 className={css.title}>Book trial lesson</h2>
                <p className={css.description}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
            </div>
            <div className={css.containerTeacher}>
                <img className={css.img}  src={foto.avatar_url} alt="x" />
                    <div>
                        <p className={css.teacher}>Your teacher</p>
                        <p className={css.name}>{foto.name} {foto.surname}</p>
                    </div>
            </div>
            <h3 className={css.question}>
            What is your main reason for learning English?
            </h3>
                    <div className={css.radioContainer}>
                        {reason.map((reason) => (
                            <label className={css.radioLabel} key={reason}>
                                <input
                                className={css.radioInput}
                                type="radio"
                                name="reason"
                                value={reason}
                                checked={formData.reason === reason}
                                onChange={handleReasonChange}
                                />
                                {reason.charAt(0).toUpperCase() + reason.slice(1).replace(/_/g, " ")}
                            </label>
                            ))}
                        </div>
            <form onSubmit={handleSubmit}>
                <input 
                    className={css.input} 
                    type="text" 
                    name="name"
                    placeholder="Full name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <input 
                    className={css.input} 
                    type="email" 
                    name="email"
                    placeholder="Email*" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input 
                    className={css.input} 
                    type="number" 
                    name="phone"
                    placeholder="Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <button className={css.button} type="submit">Book</button>
            </form>
        </div>
        </div>
    )
}