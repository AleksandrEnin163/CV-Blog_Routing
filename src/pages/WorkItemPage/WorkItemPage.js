import s from './WorkItemPage.module.css'
import { work_data } from '../../data/data'
import { useParams } from 'react-router-dom'

function WorkItemPage() {
    const { id } = useParams();
    const work = work_data.find((el) => el.id === +id);
    const { full_title, tags, main_img, year, text, content } = work
    const work_content_elem = content.map(item => {
        switch (item[0]) {
          case 'h1':
            return <h1 key={item[1]}>{item[1]}</h1>;
          case 'h2':
            return <h2 key={item[1]}>{item[1]}</h2>;
          case 'img':
            return <img key={item[1]} src={item[1]} alt="" />;
          case 'text':
            return <p key={item[1]}>{item[1]}</p>;
          default:
            return null;
        }
    }) 
  return (
    <div className={s.work_item_wrapper}>
      <div className={s.work_item_container}>
        <h3>{full_title}</h3>
        <div>
          <span>{year}</span>
          <span>{tags.join(', ')}</span>
        </div>
        <p>{text}</p>
        <img src={main_img} alt={full_title}></img>
        {work_content_elem}
      </div>
    </div>
  )
}

export default WorkItemPage