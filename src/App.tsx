import { Routes, Route } from 'react-router';
import Layout from '@/components/Layout';
import TransitionRouter from '@/components/TransitionRouter';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Industries from '@/pages/Industries';
import Distributorship from '@/pages/Distributorship';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import ProductDetail from '@/pages/ProductDetail';


export default function App() {
  return (
    <Layout>
      <TransitionRouter>
        {(displayLocation) => (
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />

            <Route path="/industries" element={<Industries />} />
            <Route path="/distributorship" element={<Distributorship />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </TransitionRouter>
    </Layout>
  );
}
