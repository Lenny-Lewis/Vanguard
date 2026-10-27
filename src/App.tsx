import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Studio from './pages/Studio'
import Offerings from './pages/Offerings'
import Inquire from './pages/Inquire'
import SiteLoader from './components/SiteLoader'

export default function App() {
  return (
    <SiteLoader>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteLoader>
  )
}
