import s from './HomePage.module.css'
import john_photo from '../../media/images/john_photo.png'
import { blog_data } from '../../data/data'
import { work_data } from '../../data/data'
import BlogItem from '../../components/BlogItem/BlogItem'
import WorkItem from '../../components/WorkItem/WorkItem'

function HomePage() {
  return (
    <>
      <div className={s.hi_section}>
          <div className={s.hi_section_container}>
            <div className={s.hi_section_info}>
              <h1 className={s.hi_h1}>
                <span className={s.hi_h1_span}>Hi, I am John,</span>
                Creative Technologist
            </h1>
            <p className={s.hi_info_p}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className={s.hi_button}>Download Resume</button>
            </div>
            <img src={john_photo} alt='john_photo'></img>
          </div>
      </div>
      <div className={s.recent_posts}>
        <div className={s.recent_posts_container}>
          <div className={s.recent_posts_view_all}>
            <p>Recent posts</p>
            <a href='#/blog'>View all</a>
          </div>
          <div className={s.recent_posts_items_container}>
            {blog_data.slice(0, 2).map(elem => <BlogItem key={elem.id} style_type='home' {...elem} />)}
          </div>
        </div>
      </div>
      <div className={s.featured_works_container}>
        <a href='#/works'>Featured works</a>
        {work_data.slice(0,3).map(elem => <WorkItem key={elem.id} {...elem} />)}
      </div>
    </>
  )
}

export default HomePage