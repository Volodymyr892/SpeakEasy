import css from "./UserMenu.module.css"
export default function UserMenu() {
  return (
    <div className={css.nav}>
      <p className={css.name}> Volodumur</p>
      <button className={css.button}>Logout</button>
    </div>
  )
}

