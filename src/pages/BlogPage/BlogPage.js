import s from './BlogPage.module.css'
import { blog_data } from '../../data/data'
import BlogItem from '../../components/BlogItem/BlogItem'

function BlogPage() {
  return (
    <div className={s.blog_page_container}>
        <div>
            <h1>Blog</h1>
            {blog_data.map(elem => <BlogItem key={elem.id} {...elem} style_type='blog' />)}
        </div>
    </div>
  )
}

export default BlogPage