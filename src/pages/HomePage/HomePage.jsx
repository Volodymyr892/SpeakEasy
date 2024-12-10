import StatsPanel from "../../components/StatsPanel/StatsPanel";
import Tutors from "../../components/Tutors/Tutors";
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className={css.container}> 
      <div>
        <Tutors/>
        <StatsPanel/>
      </div>
    </div>
  )
}

