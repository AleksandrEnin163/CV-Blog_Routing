import s from './WorksPage.module.css'
import WorkItem from '../../components/WorkItem/WorkItem'
import { work_data } from '../../data/data'

function WorksPage() {
  return (
    <div className={s.works_page_wrapper}>
    <div className={s.works_page_container}>
        <h1>Work</h1>
        {work_data.map(elem => <WorkItem key={elem.id} {...elem} tags_amount={true} />)}
    </div>
</div>
  )
}

export default WorksPage