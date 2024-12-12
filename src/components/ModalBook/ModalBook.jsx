import css from "./ModalBook.module.css"
import x from "../../assets/x.svg"
export default function ModalBook({onClose}) {
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
                    {/* <p>photo</p> */}
                    <div>
                        <p className={css.teacher}>Your teacher</p>
                        <p className={css.name}>Jane Smith</p>
                    </div>
            </div>
            <h3 className={css.question}>
            What is your main reason for learning English?
            </h3>
                      <div className={css.radioContainer}>
                           <label className={css.radioLabel}>
                                <input
                                className={css.radioInput}
                                    type="radio"
                                    name="duration"
                                    value="career"
                                    
                                />
                                Career and business
                            </label>
                            <label className={css.radioLabel}>
                                <input
                                className={css.radioInput}
                                    type="radio"
                                    name="duration"
                                    value="kids"
                                    
                                />
                               Lesson for kids
                            </label>
                            <label className={css.radioLabel}>
                                <input
                                className={css.radioInput}
                                    type="radio"
                                    name="duration"
                                    value="abroad"
                                    
                                />
                               Living abroad
                            </label>
                            <label className={css.radioLabel}>
                                <input
                                className={css.radioInput}
                                    type="radio"
                                    name="duration"
                                    value="exams"
                                    
                                />
                               Exams and coursework
                            </label>
                            <label className={css.radioLabel}>
                                <input
                                 className={css.radioInput}
                                    type="radio"
                                    name="duration"
                                    value="culture"
                                    
                                />
                               Culture, travel or hobby
                            </label>
                      </div>
            <form>
                <input 
                    className={css.input} 
                    type="text" 
                    name="name"
                    placeholder="Full name*" 
                    
                    required
                />
                <input 
                    className={css.input} 
                    type="email" 
                    name="email"
                    placeholder="Email*" 
                    required
                />
                 <input 
                    className={css.input} 
                    type="number" 
                    name="phone"
                    placeholder="Number" 
                    required
                />
                <button className={css.button} type="submit">Book</button>
            </form>
        </div>
        </div>
    )
}