import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
        <nav className={s.nav}>
            <a href='#/' className={s.nav_a}>Home</a>
            <a href='#/works' className={s.nav_a}>Works</a>
            <a href='#/blog' className={s.nav_a}>Blog</a>
        </nav>
    </div>
  )
}

export default Header