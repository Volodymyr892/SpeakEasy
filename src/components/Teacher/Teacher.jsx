import book from "../../assets/book-open.svg"
import star from "../../assets/star.svg"
import head from "../../assets/head.svg"

import ava from "../../assets/ava.png"
import css from "./Teacher.module.css"
import { useState } from "react"
import ModalBook from "../ModalBook/ModalBook"
import { addToFavorites, removeFromFavorites } from "../../redux/favorites/slice"
import { selectIsloggedIn } from "../../redux/auth/selectors"
import LoginForm from "../LoginForm/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { selectFavorites } from "../../redux/favorites/selectors"
import heartHover from "../../assets/heartHover.svg"


export default function Teacher({teacher,  selectedLevel}){
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalopen, setIsModalopen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsloggedIn);
    const favorites = useSelector(selectFavorites);

    const favoritesList = Array.isArray(favorites) ? favorites : (favorites.items || []);

    const isFavorite =  favoritesList.some((item) => item.id === teacher.id);

    
    //**-----Вдкриття та закритя модалки пробного заннятя --- */
    const openModal = ()=> setIsModalopen(true);
    const closeModal = ()=>setIsModalopen(false);

    //**----- Відкриває модалку логіну якщо не заресєтрований користувач хоче додати у вибарні викладача --- */ 
    const openLoginModal = () => setIsLoginModalOpen(true);  
    const closeLoginModal = () => setIsLoginModalOpen(false);
    
    //**-----Відкриття додаткової ініормації по викладачу--- */
    const handleToggle = () => setIsExpanded((prev) => !prev);

    //**-----Масив рівнів зання мови викладача--- */
    const levels = teacher.levels;

    //**-----Додаваня викладача в улюблені--- */ 
    const handleFavoriteClick = () => {
        if (!isLoggedIn) {
            openLoginModal(); //? Відкрити модалку якщо користувач не залогінений
        } else if (isFavorite) {
            dispatch(removeFromFavorites(teacher.id)); 
          } else {
            dispatch(addToFavorites(teacher));
          }
    };

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
                        <button className={css.buttonHead} type="submit" onClick={handleFavoriteClick}><img   src={isFavorite ? heartHover : head} alt="head" /></button>
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
                        <li    className={`${
                            selectedLevel === level ? 
                            css.selected : css.levelItem
                            }`} key={level}>
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
        {isModalopen && <ModalBook foto={teacher} onClose={closeModal} />}
        {isLoginModalOpen && <LoginForm onClose={closeLoginModal}/>}
        </div>
    )
}
