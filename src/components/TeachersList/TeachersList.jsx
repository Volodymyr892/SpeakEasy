import { useDispatch, useSelector } from "react-redux";
import Teacher from "../Teacher/Teacher";
import css from "./TeachersList.module.css"
import { useEffect, useState } from "react";
import { featchTeachers } from "../../redux/teachers/operations";
import { selectTeacher, selectVisibleCount} from "../../redux/teachers/selectors";
import { incrementVisibleCount } from "../../redux/teachers/slice";


export default function TeachersList({ selectedLevel}) {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeacher) || [];
    const visibleCount = useSelector(selectVisibleCount);

    useEffect(() => {
        dispatch(featchTeachers());
    }, [dispatch]);


    const visibleTeachers = teachers.slice(0, visibleCount);

    //**------Завантаження наступних елементів--- */ 
    const loadMore = () => {
        const remainingTeachers = teachers.length - visibleCount;
        
        if (remainingTeachers <= 4) {
            dispatch(incrementVisibleCount(remainingTeachers));
          } else {
            dispatch(incrementVisibleCount(4));
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
