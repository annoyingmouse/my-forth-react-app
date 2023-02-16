import styles from './Home.module.scss'
import { useFetch } from "../hooks/useFetch"
import { Link } from 'react-router-dom'

export const Home = () => {
  const {data: articles, isPending, error} = useFetch('http://localhost:3000/articles')
  return (
    <div className={styles.home}>
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles?.map(article => (
        <div className={styles['article-preview']}
             key={article.id}>
          <h2>{article.title}</h2>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}