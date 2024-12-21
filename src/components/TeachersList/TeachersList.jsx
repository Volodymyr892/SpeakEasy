import { useDispatch, useSelector } from "react-redux";
import Teacher from "../Teacher/Teacher";
import css from "./TeachersList.module.css"
import { useEffect, useState } from "react";
import { featchTeachers } from "../../redux/teachers/operations";
import { selectTeacher} from "../../redux/teachers/selectors";


export default function TeachersList() {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeacher) || [];

    const [visibleCount, setVisibleCount] = useState(4);


    useEffect(()=>{
        dispatch(featchTeachers())
    },[dispatch])

    const visibleTeachers = teachers.slice(0, visibleCount);

    // Функція для завантаження наступних 4 елементів
    const loadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, teachers.length));
    };

    return(
       <div className={css.container}>
            <ul >
                {visibleTeachers.map((teacher)=> (
                    <li key={teacher.id}>
                    <Teacher teacher={teacher}/>
                    </li>
            ))}
            </ul>
            {visibleCount < teachers.length && (
            <button className={css.button} type="submit" onClick={loadMore}>Load more</button>
            )}
       </div>
    )
}