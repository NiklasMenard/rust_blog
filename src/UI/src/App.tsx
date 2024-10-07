import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';

import Home from './pages/Home';
import ProductsPage from './pages/Products/ProductsPage';
import LoginPage from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;