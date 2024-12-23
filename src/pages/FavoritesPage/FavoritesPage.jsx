import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters"
import TeacherListFavorits from "../../components/TeacherListFavorits/TeacherListFavorits"
import css from "./FavoritesPage.module.css"
export default function FavoritesPage() {
  const storedLevel = localStorage.getItem("selectedLevel") || '';
  const [selectedLevel, setSelectedLevel] = useState(storedLevel);
  useEffect(() => {
    if (selectedLevel) {
      localStorage.setItem("selectedLevel", selectedLevel);
    }
  }, [selectedLevel]);
  return (
    <main className={css.container}>
      <div>
        <Filters selectedLevel={selectedLevel}  setSelectedLevel={setSelectedLevel}/>
        <TeacherListFavorits selectedLevel={selectedLevel}/>
      </div>
    </main>
  )
}

