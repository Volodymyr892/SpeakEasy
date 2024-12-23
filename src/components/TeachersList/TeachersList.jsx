import { useDispatch, useSelector } from "react-redux";
import Teacher from "../Teacher/Teacher";
import css from "./TeachersList.module.css"
import { useEffect, useState } from "react";
import { featchTeachers } from "../../redux/teachers/operations";
import { selectTeacher} from "../../redux/teachers/selectors";


export default function TeachersList({ selectedLevel}) {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeacher) || [];

    const [visibleCount, setVisibleCount] = useState(() => {
        const savedCount = localStorage.getItem("visibleCount");
        return savedCount ? parseInt(savedCount, 10) : 4;
    });

    useEffect(() => {
        dispatch(featchTeachers());
    }, [dispatch]);

    //**-----Оновлення localStorage при зміні visibleCount--- */ 
    useEffect(() => {
        localStorage.setItem("visibleCount", visibleCount);
    }, [visibleCount]);

    const visibleTeachers = teachers.slice(0, visibleCount);

    //**------Завантаження наступних елементів--- */ 
    const loadMore = () => {
        const remainingTeachers = teachers.length - visibleCount;
        
        if (remainingTeachers <= 4) {
            setVisibleCount((prevCount) => prevCount + remainingTeachers); 
        } else {
            setVisibleCount((prevCount) => prevCount + 4);
        }
    };

    return(
        <section className={css.container}>
            <ul >
                {visibleTeachers.map((teacher)=> (
                    <li key={teacher.id}>
                    <Teacher teacher={teacher} selectedLevel={selectedLevel} />
                    </li>
            ))}
            </ul>
            {visibleCount < teachers.length && (
                <button className={css.button} type="submit" onClick={loadMore}>Load more</button>
            )}
        </section>
    )
}
