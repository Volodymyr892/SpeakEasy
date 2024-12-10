import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  return (
    <div className={css.container}>
     <TeachersList/>
    </div>
  )
}

