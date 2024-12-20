import book from "../../assets/book-open.svg"
import star from "../../assets/star.svg"
import head from "../../assets/head.svg"

import ava from "../../assets/ava.png"
import css from "./Teacher.module.css"
import { useState } from "react"
import ModalBook from "../ModalBook/ModalBook"


export default function Teacher({teacher}){
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalopen, setIsModalopen] = useState(false);

    
    
    const openModal = ()=> setIsModalopen(true);
    const closeModal = ()=>setIsModalopen(false);
    
    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };
    const levels = teacher.levels;

    return(
        <div className={css.container}>
        <div className={css.imgCont}> <img className={css.img}  src={teacher.avatar_url} alt="" /></div>
        <ul className={css.contaiterList}>
            <li className={css.itemOne}>
                <div>
                <p className={css.nameTecher}>Languages
                </p>
                <p className={css.name}>{teacher.name} {teacher.surname} </p>
                </div>
                <ul className={css.list}>
                    <div className={css.itemContainer}>
                        <li className={css.item}>
                            <img className={css.imgIcon} width={16} height={16} src={book} alt="book" />
                            <p className={css.pTop}>Lessons online</p>
                        </li>
                        <li className={css.pTop}>Lessons done: {teacher.lessons_done}</li>
                        <li className={css.item}>
                            <img className={css.imgIcon} width={16}  height={16} src={star} alt="star" />
                            <p className={css.pTop}>{teacher.rating}</p>
                        </li>
                        <li>
                            <p className={css.pTop}>Price / 1 hour: <span className={css.dollar}>{teacher.price_per_hour}$</span></p>
                        </li>
                    </div>
                    <li>
                        <button className={css.buttonHead} type="submit"><img   src={head} alt="head" /></button>
                    </li>
                </ul>
            </li>
            <li >
                <p className={css.speaks}>Speaks: <span className={css.speaksSpan}>{teacher.languages[0]}, {teacher.languages[1]}</span></p>
                <p className={css.speaks}>Lesson Info: <span className={css.span}>{teacher.lesson_info}</span></p>
                <p className={css.speaks}>Conditions:<span className={css.span}>{teacher.conditions[0]} {teacher.conditions[1]} </span></p>

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
                        <p className={css.fullDescription}>{teacher.experience}</p>
                        <ul>
                            {teacher.reviews.map(review => 
                           (<div key={review.comment}> 
                                <li className={css.itemReviews}>
                                    <img className={css} src={ava} alt="Frank" />
                                        <div>
                                            <p className={css.speaks}>{review.reviewer_name}</p>
                                            <div className={css.itemReviewsStar}>
                                            <img className={css.imgIconStar} width={16}  height={16} src={star} alt="star" />
                                                <p className={css.pTop}>{review.reviewer_rating}.0</p>
                                            </div>
                                        </div>
                                </li>
                                <li>
                                    <p className={css.comment}>{review.comment}</p>
                                </li>
                           </div>))}
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
