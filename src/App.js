import styles from './App.module.scss'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Article } from './pages/Article'

export const App = () => (
  <div className={styles.App}>
    <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/"
                 className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/about"
                 className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/contact"
                 className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/"
               element={ <Home /> }/>
        <Route path="/about"
               element={ <About /> }/>
        <Route path="/contact"
               element={ <Contact /> }/>
        <Route path="/articles/:id"
               element={ <Article /> }/>
        <Route path="*"
               element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  </div>
)