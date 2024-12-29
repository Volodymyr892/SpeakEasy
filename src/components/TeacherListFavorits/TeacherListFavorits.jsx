import { useSelector } from "react-redux"
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./TeacherListFavorits.module.css"
import TeacherFavorits from "../TeacherFavorits/TeacherFavorits";


export default function TeacherListFavorits({selectedLevel}) {
    const favorits= useSelector(selectFavorites);
    const favoritesList = Array.isArray(favorits) ? favorits : (favorits.items || []);
    
  return (
    <section className={css.container}>
      {favoritesList.length === 0 ? (
        <p className={css.noFavorites}>You haven't added any favorites yet.</p>
      ) : (
        <ul>
          {favoritesList.map((teacher) => (
            <li key={teacher.id}>
              <TeacherFavorits favorits={teacher} selectedLevel={selectedLevel} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

