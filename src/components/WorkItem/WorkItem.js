import s from './WorkItem.module.css'
import { Link } from 'react-router-dom'

function WorkItem({ id, title, tags, main_img, year, text, tags_amount }) {
  const tags_length = tags_amount ? tags.join(', ') : tags[0]
  return (
    <div className={s.work_item}>
        <img src={main_img} alt={title}></img>
        <div className={s.work_item_info}>
            <Link to={`/works/${id}`} style={{ textDecoration: 'none' }}>
              <h3>{title}</h3>
            </Link>
            <div>
                <span>{year}</span>
                <span>{tags_length}</span>
            </div>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default WorkItem