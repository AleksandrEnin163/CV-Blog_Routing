import s from './Footer.module.css'
import { mediaIcons } from '../../media/icons/icons'

function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.footer_container}>
            <ul className={s.media_list}>
                {mediaIcons.map(elem => (
                    <li>
                        {elem}
                    </li>
                ))}
            </ul>
            <p className={s.copyright_p}>Copyright ©2020 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer