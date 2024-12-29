import { useEffect, useState } from "react";
import css from "./Filters.module.css"
import { useDispatch } from "react-redux";
import { featchTeachers } from "../../redux/teachers/operations";

export default function Filters({selectedLevel, setSelectedLevel}) {
  const dispatch = useDispatch();

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [resultsCount, setResultsCount] = useState(0);

      //**-------масив для вибору мови 

      const languages = ['French',  'Spanish', 'English', 'German', 'Ukrainian', 'Polish', 'Mandarin', 'Italian', 'Korean', 'Chinese', 'Vietnamese'];

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
        const fetchData = async () => {
          const result = await dispatch(
            featchTeachers({
              language: selectedLanguage || null,
              level: selectedLevel || null,
              price: selectedPrice ? Number(selectedPrice) : null,
            })
          );
          setResultsCount(result.payload?.length || 0);
        };
    
        fetchData();
      }, [selectedLanguage, selectedLevel, selectedPrice, dispatch]);

  return (
    
      <section >
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
        {resultsCount === 0 && (
        <p className={css.noResults}>No teachers found for the selected criteria.</p>
      )}
      </section>
  );   
}