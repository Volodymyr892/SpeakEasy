import { useEffect, useState } from "react";
import css from "./Filters.module.css"
import { useDispatch } from "react-redux";
import { featchTeachers } from "../../redux/teachers/operations";

export default function Filters() {
  const dispatch = useDispatch();

    const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');


    const languages = ['French', 'English', 'German', 'Ukrainian', 'Polish'];
const levels = [
  { level: 'A1 Beginner', price: 30 },
  { level: 'A2 Elementary', price: 20 },
  { level: 'B1 Intermediate', price: 30 },
  { level: 'B2 Upper-Intermediate', price: 40 },
  { level: "C1 Advanced", price: 50 },
  { level: "C2 Proficient", price: 40 },

];
const prices = [10, 20,25, 28, 30, 40];

useEffect(() => {
  dispatch(
    featchTeachers({
      language: selectedLanguage || null, // Параметр відправляється лише якщо він обраний
      level: selectedLevel || null,
      price: selectedPrice ? Number(selectedPrice) : null,
    })
  );
}, [selectedLanguage, selectedLevel, selectedPrice, dispatch]);

  return (
    
      <div className={css.container}>
        <div>
          <label className={css.title}>Languages</label>
          <select className={css.select}  value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option className={css.option} key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={css.title}>Level of knowledge</label>
          <select className={css.select} value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            {levels.map((lvl) => (
              <option className={css.option} key={lvl.level} value={lvl.level}>
                {lvl.level}
              </option>
            ))}
          </select>
        </div>
        <div>
        <label  className={css.title}>Price</label>
          <select className={css.select} value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
            {prices.map((price) => (
              <option className={css.option} key={price} value={price}>
                {price} $
              </option>
            ))}
          </select>
        </div>
      </div>
  );   
}