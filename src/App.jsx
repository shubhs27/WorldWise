import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";

// dist/assets/index-93df4c8c.css   30.25 kB │ gzip:   5.05 kB
// dist/assets/index-df0d5e63.js   508.68 kB │ gzip: 148.02 kB

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-dfaf379f.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-396ee16a.js              0.22 kB │ gzip:   0.20 kB
// dist/assets/PageNav-c16c51a3.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-22bba704.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-78d96c3f.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-737013eb.js           0.86 kB │ gzip:   0.48 kB
// dist/assets/Login-b75bb173.js             1.02 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-faac5293.js       156.93 kB │ gzip:  46.10 kB
// dist/assets/index-71b70b85.js           350.17 kB │ gzip: 101.39 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
