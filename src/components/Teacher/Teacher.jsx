import book from "../../assets/book-open.svg"
import star from "../../assets/star.svg"
import head from "../../assets/head.svg"
import jane from "../../assets/Jane.png"
import css from "./Teacher.module.css"
export default function Teacher(){
    return(
        <div className={css.container}>
       <div className={css.imgCont}> <img className={css.img}  src={jane} alt="" /></div>
        <ul>
            <li className={css.itemOne}>
                <div>
                <p className={css.nameTecher}>Languages
                </p>
                <p className={css.name}>Jane Smith </p>
                </div>
                <ul className={css.list}>
                    <div className={css.itemContainer}>
                        <li className={css.item}>
                            <img className={css.imgIcon} width={16} height={16} src={book} alt="book" />
                            <p className={css.pTop}>Lessons online</p>
                        </li>
                        <li className={css.pTop}>Lessons done: 1098</li>
                        <li className={css.item}>
                            <img className={css.imgIcon} width={16}  height={16} src={star} alt="star" />
                            <p className={css.pTop}>Rating: 4.8</p>
                        </li>
                        <li>
                            <p className={css.pTop}>Price / 1 hour: 30$</p>
                        </li>
                    </div>
                    <li>
                        <img   src={head} alt="head" />
                    </li>
                </ul>
            </li>
            <li >
                <p className={css.speaks}>Speaks: <span className={css.speaksSpan}>German, French</span></p>
                <p className={css.speaks}>Lesson Info: <span className={css.span}>Lessons are structured to cover grammar, vocabulary, and practical usage of the language.</span></p>
                <p className={css.speaks}>Conditions:<span className={css.span}> Welcomes both adult learners and teenagers (13 years and above).Provides personalized study plans</span></p>
                <button >Read more</button>
                <div >
        <span >#A1 Beginner</span>
        <span >#A2 Elementary</span>
        <span >#B1 Intermediate</span>
        <span >#B2 Upper-Intermediate</span>
      </div>
        <button>asdfg</button>
            </li>
        </ul>
        
        </div>
    )
}