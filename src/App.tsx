import { useState } from "react";
import styles from  "./App.module.css";

//importando arquivos
import poweredImage from "./assets/powered.png";
import leftarrow from "./assets/leftarrow.png";
import {levels, calculateImc, Level} from "./helpers/imc";
import GridItem from "./components/GridItem";

const App = ()=>{
    const [heightField, setHeightField] = useState<number>();
    const [widthField, setWidthField] = useState<number>();
    const [showItem, setShowItem] = useState<Level | null >(null);

    function handleCalculate(){
      if(heightField && widthField){
        setShowItem(calculateImc(heightField, widthField));
      }else{
        alert('confira todos os campos')
      }
    }

    function handleBack(){
      setShowItem(null);
      setHeightField(parseFloat('Digite a sua altura'));
      setWidthField(parseFloat('Digite o seu peso'));
    }

  return(
    <div className="main" >
      <header>
        <div className={styles.headerContainer} >
          <img src={poweredImage} alt="logo"  width={150} />.
        </div>
      </header>
      <div className={styles.container} >
        <div className={styles.leftSide} >
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para indice de massa corpória, parâmetro adotado
            pela Organização Mundial de Saúde para calcular o peso ideal
            de cada pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura"
            value={heightField}
            disabled={showItem? true : false}
            onChange={(e)=>setHeightField(parseFloat(e.target.value))}
          />
           <input
            type="number"
            placeholder="Digite o seu peso"
            value={widthField}
            disabled={showItem? true : false}
            onChange={(e)=>setWidthField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculate} disabled={showItem? true : false}  >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem? (
             <div className={styles.grid} >
             {levels.map((item, key)=>(
               <GridItem key={key} item= {item} />
             ))}
           </div>
          ): 
           <div className={styles.rightBig} >
              <div className={styles.rightArrow} >
                <img src={leftarrow} width={25} onClick={handleBack} />
              </div>
              <GridItem item={showItem} />
           </div>
          }
         
        </div>
      </div>
    </div>
  )
}
export default App;
