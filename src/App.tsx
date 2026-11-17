import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import AboutCulture from '@/pages/AboutCulture'
import AboutProfile from '@/pages/AboutProfile'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import NotFound from '@/pages/NotFound'
import ProductCategoryPage from '@/pages/ProductCategory'
import Products from '@/pages/Products'
import SolutionDetail from '@/pages/SolutionDetail'
import Solutions from '@/pages/Solutions'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/zh" replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductCategoryPage />} />

          <Route path="solutions" element={<Solutions />} />
          <Route path="solution/:slug" element={<SolutionDetail />} />

          <Route path="about" element={<Navigate to="profile" replace />} />
          <Route path="about/profile" element={<AboutProfile />} />
          <Route path="about/culture" element={<AboutCulture />} />

          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsDetail />} />

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
