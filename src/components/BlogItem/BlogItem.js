import s from './BlogItem.module.css'

function BlogItem({ id, title, text, tags, date, style_type }) {
    const style = style_type === 'home' ? 'blog_item_home' : 'blog_item_blog'
    const [year, month, day] = date.split('-');
	const formatdDate = `${day} ${new Date(month + ' 1').toLocaleString('en', {
		month: 'short',
	})} ${year}`;
  return (
    <div className={s[style]}>
        <h3>{title}</h3>
        <div>
          <span>{formatdDate}</span>
          <span>{tags.join(', ')}</span>
		    </div>
        <p>{text}</p>
    </div>
  )
}

export default BlogItem