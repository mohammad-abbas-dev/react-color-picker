import styles from "./color.module.css";
import { useState } from "react";
function Color() {
  let [color, setColor] = useState("#ff0000");
  let colorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className={styles.box} style={{background:color}}>
        <h1>
          Your Color Is: <br />
          
        </h1>
        <h3>{color}</h3>
      </div>
      <input type="color" className={styles.btn} onChange={colorChange}></input>
    </>
  );
}

export default Color;
