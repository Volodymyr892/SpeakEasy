import Filters from "../../components/Filters/Filters";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  return (
    <main className={css.container}>
    <div>
      <Filters/>
      <TeachersList/>
    </div>
    </main>
  )
}

