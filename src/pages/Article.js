import { useFetch } from "../hooks/useFetch"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react"

export const Article = () => {
  const { id } = useParams()
  const { data: article, isPending, error } = useFetch(`http://localhost:3000/articles/${id}`)
  const navigate = useNavigate()

  useEffect(() => {
    if(error) {
      setTimeout(() => navigate('/'), 2000)
    }
  }, [error, navigate])

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && 
        <div>
          <h2>{article.title}</h2>
          <p>Written by {article.author}</p>
          <div>{article.body}</div>
        </div>
      }
    </div>
  )
}