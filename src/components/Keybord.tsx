import styles from './Keybord.module.css'
import keys from "../keys.json"

const Keybord = () => {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }}>
      {keys.map(key => {
        return <button className={`${styles.btn} `} key={key}>{key}</button>
      }) }
    </div>
  )
}

export default Keybord