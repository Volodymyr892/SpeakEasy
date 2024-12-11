import { useState } from "react";
import css from "./Filters.module.css"

export default function Filters() {
    const [selectedLanguage, setSelectedLanguage] = useState('French');
  const [selectedLevel, setSelectedLevel] = useState('A1 Beginner');
  const [selectedPrice, setSelectedPrice] = useState(30);


    const languages = ['French', 'English', 'German', 'Ukrainian', 'Polish'];
const levels = [
  { level: 'A1 Beginner', price: 30 },
  { level: 'A2 Elementary', price: 20 },
  { level: 'B1 Intermediate', price: 30 },
  { level: 'B2 Upper-Intermediate', price: 40 },
];
const prices = [10, 20, 30, 40];

const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

const handleLevelChange = (e) => {
const level = levels.find((lvl) => lvl.level === e.target.value);
setSelectedLevel(level.level);
setSelectedPrice(level.price);
};
const handlePriceChange = (e) => setSelectedPrice(Number(e.target.value));

  return (
    
      <div className={css.container}>
        <div>
          <label className={css.title}>Languages</label>
          <select className={css.select}  value={selectedLanguage} onChange={handleLanguageChange}>
            {languages.map((lang) => (
              <option className={css.option} key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={css.title}>Level of knowledge</label>
          <select className={css.select} value={selectedLevel} onChange={handleLevelChange}>
            {levels.map((lvl) => (
              <option className={css.option} key={lvl.level} value={lvl.level}>
                {lvl.level}
              </option>
            ))}
          </select>
        </div>
        <div>
        <label  className={css.title}>Price</label>
          <select className={css.select} value={selectedPrice} onChange={handlePriceChange}>
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