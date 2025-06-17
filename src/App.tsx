import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetail from './components/products/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Suspense
              fallback={
                <div className="flex h-[calc(100vh-64px)] items-center justify-center">
                  <LoadingSpinner size="lg" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  );
}
