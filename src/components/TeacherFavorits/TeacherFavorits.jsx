import book from "../../assets/book-open.svg"
import star from "../../assets/star.svg"
import heartHover from "../../assets/heartHover.svg"
import ava from "../../assets/ava.png"

import { useState } from "react";
import css from "./TeacherFavorits.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectIsloggedIn } from "../../redux/auth/selectors";
// import LoginForm from "../LoginForm/LoginForm";
import ModalBook from "../ModalBook/ModalBook";
import { removeFromFavorites } from "../../redux/favorites/slice";

export default function TeacherFavorits({favorits,  selectedLevel}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalopen, setIsModalopen] = useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsloggedIn);

    
    
    const openModal = ()=> setIsModalopen(true);
    const closeModal = ()=>setIsModalopen(false);
    
    const handleToggle = () => setIsExpanded((prev) => !prev);

    const levels = favorits.levels;

    const handleFavoriteClick = () => {
        if (!isLoggedIn) {
            alert("Please log in to remove favorites");
        } else {
          dispatch(removeFromFavorites(favorits.id)); // видалити
      };
    }
  return (
     <div className={css.container}>
            <div className={css.imgCont}> <img className={css.img}  src={favorits.avatar_url} alt="" /></div>
            <ul className={css.contaiterList}>
                <li className={css.itemOne}>
                    <div>
                        <p className={css.nameTecher}>Languages</p>
                        <p className={css.name}>{favorits.name} {favorits.surname} </p>
                    </div>
                    <ul className={css.list}>
                        <div className={css.itemContainer}>
                            <li className={css.item}>
                                <img className={css.imgIcon} width={16} height={16} src={book} alt="book" />
                                <p className={css.pTop}>Lessons online</p>
                            </li>
                            <li className={css.pTop}>Lessons done: {favorits.lessons_done}</li>
                            <li className={css.item}>
                                <img className={css.imgIcon} width={16}  height={16} src={star} alt="star" />
                                <p className={css.pTop}>{favorits.rating}</p>
                            </li>
                            <li>
                                <p className={css.pTop}>Price / 1 hour: <span className={css.dollar}>{favorits.price_per_hour}$</span></p>
                            </li>
                        </div>
                        <li>
                            <button className={css.buttonHead} type="submit" onClick={handleFavoriteClick}><img   src={heartHover} alt="head" /></button>
                        </li>
                    </ul>
                </li>
                <li >
                    <p className={css.speaks}>Speaks: <span className={css.speaksSpan}>{favorits.languages[0]}, {favorits.languages[1]}</span></p>
                    <p className={css.speaks}>Lesson Info: <span className={css.span}>{favorits.lesson_info}</span></p>
                    <p className={css.speaks}>Conditions:<span className={css.span}>{favorits.conditions[0]} {favorits.conditions[1]} </span></p>
    
                    {!isExpanded ? (<>
                        <button className={css.buttonRead} type="submit" onClick={handleToggle}>
                Read more
                        </button>
                        <ul className={css.laveList}>
                            {levels.map((level) => (
                            <li    className={`${
                                selectedLevel === level ? 
                                css.selected : css.levelItem
                                }`} key={level}>
                                <p className={css.lavelName}>{level}</p>
                            </li>
                        ))}
                        </ul>
                        </>):(<>
                            <p className={css.fullDescription}>{favorits.experience}</p>
                            <ul>
                                {favorits.reviews.map(review => 
                               (<div key={review.comment}> 
                                    <li className={css.itemReviews}>
                                        <img className={css.imgAva} src={ava} alt="Frank" />
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
                                <li  key={level}
                                className={`${css.levelItem} ${
                                    selectedLevel === level ? css.selected:""
                                    }`}
                                >
                                   
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
            {isModalopen && <ModalBook foto={favorits} onClose={closeModal} />}
            </div>
  )
}

