import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import VolunteerPage from './pages/VolunteerPage.jsx'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<CoursesPage />} path="/courses" />
          <Route element={<VolunteerPage />} path="/volunteer" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App