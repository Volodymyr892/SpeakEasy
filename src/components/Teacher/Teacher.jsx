import book from "../../assets/book-open.svg"
import star from "../../assets/star.svg"
import head from "../../assets/head.svg"
import jane from "../../assets/Jane.png"
import Frank from "../../assets/frank.png"
import css from "./Teacher.module.css"
import { useState } from "react"
import ModalBook from "../ModalBook/ModalBook"


export default function Teacher(){
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalopen, setIsModalopen] = useState(false);

    const openModal = ()=> setIsModalopen(true);
    const closeModal = ()=>setIsModalopen(false);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
      };
      const levels = [
        "#A1 Beginner",
        "#A2 Elementary",
        "#B1 Intermediate",
        "#B2 Upper-Intermediate",
    ];
    return(
        <div className={css.container}>
        <div className={css.imgCont}> <img className={css.img}  src={jane} alt="" /></div>
        <ul className={css.contaiterList}>
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
                            <p className={css.pTop}>Price / 1 hour: <span className={css.dollar}>30$</span></p>
                        </li>
                    </div>
                    <li>
                        <button className={css.buttonHead} type="submit"><img   src={head} alt="head" /></button>
                    </li>
                </ul>
            </li>
            <li >
                <p className={css.speaks}>Speaks: <span className={css.speaksSpan}>German, French</span></p>
                <p className={css.speaks}>Lesson Info: <span className={css.span}>Lessons are structured to cover grammar, vocabulary, and practical usage of the language.</span></p>
                <p className={css.speaks}>Conditions:<span className={css.span}> Welcomes both adult learners and teenagers (13 years and above).Provides personalized study plans</span></p>

                {!isExpanded ? (<>
                    <button className={css.buttonRead} type="submit" onClick={handleToggle}>
            Read more
                    </button>
                    <ul className={css.laveList}>
                        {levels.map((level) => (
                        <li className={css.lavelItem} key={level}>
                            <p className={css.lavelName}>{level}</p>
                        </li>
                    ))}
                    </ul>
                    </>):(<>
                        <p className={css.fullDescription}>Jane is an experienced and dedicated language teacher specializing in German and French. She holds a Bachelor's degree in German Studies and a Master's degree in French Literature. Her passion for languages and teaching has driven her to become a highly proficient and knowledgeable instructor. With over 10 years of teaching experience, Jane has helped numerous students of various backgrounds and proficiency levels achieve their language learning goals. She is skilled at adapting her teaching methods to suit the needs and learning styles of her students, ensuring that they feel supported and motivated throughout their language journey.</p>
                        <ul>
                            <li className={css.itemReviews}>
                                <img src={Frank} alt="Frank" />
                                    <div>
                                        <p className={css.speaks}>Frank</p>
                                        <div className={css.itemReviewsStar}>
                                        <img className={css.imgIconStar} width={16}  height={16} src={star} alt="star" />
                                            <p className={css.pTop}>4.0</p>
                                        </div>
                                    </div>
                            </li>
                            <li>
                                <p className={css.comment}>Jane's lessons were very helpful. I made good progress.</p>
                            </li>
                        </ul>
                    <ul className={css.laveList}>
                        {levels.map((level) => (
                            <li className={css.lavelItem} key={level}>
                                <p className={css.lavelName}>{level}</p>
                            </li>
                        ))}
                    </ul>
                    <li>
                        <button className={css.buttonBook} onClick={openModal}>Book trial lesson</button>
                    </li>
                </>)}
            </li>
        </ul>
        {isModalopen && <ModalBook onClose={closeModal} />}
        </div>
    )
}
