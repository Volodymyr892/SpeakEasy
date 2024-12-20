import { useDispatch, useSelector } from "react-redux";
import Teacher from "../Teacher/Teacher";
import css from "./TeachersList.module.css"
import { useEffect } from "react";
import { featchTeachers } from "../../redux/teachers/operations";
import { selectTeacher, selectTeacherPage } from "../../redux/teachers/selectors";
import { incrementPage } from "../../redux/teachers/slice";

export default function TeachersList() {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeacher) || [];
    const page = useSelector(selectTeacherPage)


    useEffect(()=>{
        dispatch(featchTeachers({ page, limit: 4 }))
    },[dispatch,  page])
    const handleLoadMore = () => {
        const nextPage = page + 1;
        dispatch(featchTeachers({ page: nextPage , limit: 4 }));
        dispatch(incrementPage());
      };
    return(
       <div className={css.container}>
            <ul >
                {teachers.map((teacher)=> (
                    <li key={teacher.id}>
                    <Teacher teacher={teacher}/>
                    </li>
            ))}
            </ul>
            <button className={css.button} type="submit" onClick={handleLoadMore}>Load more</button>
       </div>
    )
}