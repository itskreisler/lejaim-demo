import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import { appPages } from './pages/urls'
import './custom.scss'
import TagFooter from './components/TagFooter'
import TagIrArriba from './components/TagIrArriba'
const App = () => {
  return (
    <Router>
      <main className="container-fluid">
        <TagIrArriba />
        <Menu />
        <Routes>
          {appPages.map(({ url, Component }, index) => (
            <Route
              key={index}
              path={url}
              exact={true}
              element={<Component />}
            />
          ))}
        </Routes>
        <TagFooter />
      </main>
    </Router>
  )
}

export default App
