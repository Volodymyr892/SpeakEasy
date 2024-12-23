import { useEffect, useState } from "react";
import css from "./Filters.module.css"
import { useDispatch } from "react-redux";
import { featchTeachers } from "../../redux/teachers/operations";

export default function Filters({selectedLevel, setSelectedLevel}) {
  const dispatch = useDispatch();

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

      //**-------масив для вибору мови 

      const languages = ['French', 'English', 'German', 'Ukrainian', 'Polish'];

      //**-------масив для вибору рівня мови 
      const levels = [
        { level: 'A1 Beginner'},
        { level: 'A2 Elementary'},
        { level: 'B1 Intermediate' },
        { level: 'B2 Upper-Intermediate'},
        { level: "C1 Advanced"},
        { level: "C2 Proficient" },
      ];

      //?-------генератор чисел для виболру ціни
      const generatePrices = (min, max, step) => {
        const prices = [];
        for (let price = min; price <= max; price += step) {
          prices.push(price);
        }
        return prices;
      };
      const prices = generatePrices(10, 40, 1);

      useEffect(() => {
        dispatch(
          featchTeachers({
            language: selectedLanguage || null, //* Параметр відправляється лише якщо він обраний
            level: selectedLevel || null,
            price: selectedPrice ? Number(selectedPrice) : null,
          })
        );
      }, [selectedLanguage, selectedLevel, selectedPrice, dispatch]);

  return (
    
      <section className={css.container}>
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
      </section>
  );   
}