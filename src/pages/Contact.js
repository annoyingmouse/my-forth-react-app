import { useLocation } from "react-router-dom"
export const Contact = () => {
  const queryString = useLocation().search
  const queryParems = new URLSearchParams(queryString)
  const name = queryParems.get('name')
    

  return (
    <div>
      <h2>Hey {name}, contact us here...</h2>
      <p>Lorem ipsum</p>
    </div>
  )
}