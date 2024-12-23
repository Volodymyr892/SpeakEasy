import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css"

export default function TeachersPage() {
  const [selectedLevel, setSelectedLevel] = useState('');
  
  return (
    <main className={css.container}>
    <div>
      <Filters selectedLevel={selectedLevel}  setSelectedLevel={setSelectedLevel}/>
      <TeachersList selectedLevel={selectedLevel} />
    </div>
    </main>
  )
}

