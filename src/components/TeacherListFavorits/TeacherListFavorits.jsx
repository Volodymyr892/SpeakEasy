import { useSelector } from "react-redux"
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./TeacherListFavorits.module.css"
// import { useEffect, useState } from "react";
import TeacherFavorits from "../TeacherFavorits/TeacherFavorits";
// import { useEffect } from "react";


export default function TeacherListFavorits({selectedLevel}) {
    const favorits= useSelector(selectFavorites);
    
  return (
    <section className={css.container}>
                <ul >
                    {favorits.map((teacher)=> (
                        <li key={teacher.id}>
                        <TeacherFavorits favorits={teacher} selectedLevel={selectedLevel}/>
                        </li>
                ))}
                </ul>
    </section>
  )
}

