// Core dependencies
import {Provider} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import React from "react";
import ProtectedRoute from "./routes/ProtectedRoute";

// Styles
import "./App.css";

// Store
import {store} from "./redux/store";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";

// Customer Pages
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";

// Admin Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customer from "./pages/Customer";
import Transaction from "./pages/Transaction";

// Admin Management Pages
import NewProduct from "./pages/management/NewProduct";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";

// Chart Components
import BarCharts from "./pages/charts/BarCharts";
import LineCharts from "./pages/charts/LineCharts";
import PieCharts from "./pages/charts/PieCharts";

// App Features
import Stopwatch from "./pages/apps/Stopwatch";
import CouponGenerator from "./pages/apps/CouponGenerator";
import Toss from "./pages/apps/Toss";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";

// Status
import Forbidden403 from "./pages/403";

const customerRoutes = [
    {path: "/", element: <Home/>},
    {path: "/products", element: <AllProducts/>},
    {path: "/categories", element: <AllCategories/>},
    {path: "/product/:productID", element: <SingleProduct/>},
    {path: "/category/:slug", element: <SingleCategory/>},
];

const protectedCustomerRoutes = [
    {path: "/wishlist", element: <Wishlist/>},
    {path: "/account", element: <Profile/>},
];

const adminRoutes = [
    {path: "/admin/dashboard", element: <Dashboard/>},
    {path: "/admin/products", element: <Products/>},
    {path: "/admin/customers", element: <Customer/>},
    {path: "/admin/transactions", element: <Transaction/>},
];

const adminManagementRoutes = [
    {path: "/admin/products/new", element: <NewProduct/>},
    {path: "/admin/products/manage", element: <ProductManagement/>},
    {path: "/admin/transactions/manage", element: <TransactionManagement/>},
];

const chartRoutes = [
    {path: "/admin/charts/bar", element: <BarCharts/>},
    {path: "/admin/charts/line", element: <LineCharts/>},
    {path: "/admin/charts/pie", element: <PieCharts/>},
];

const appFeatureRoutes = [
    {path: "/admin/apps/stopwatch", element: <Stopwatch/>},
    {path: "/admin/apps/coupon", element: <CouponGenerator/>},
    {path: "/admin/apps/toss", element: <Toss/>},
];

const statusRoutes = [
    {path: "/403", element: <Forbidden403/>},
];

const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar/>
            <main className="min-h-screen">
                {children}
            </main>
            <Footer/>
            <Cart/>
            <LoginModal/>
            <ScrollToTopButton/>
            <BannerPopup/>
            <Toaster position="bottom-center"/>
        </>
    );
};

function App() {
    return (
        <Provider store={store}>
            <MainLayout>
                <Routes>
                    {/* Customer Routes */}
                    {customerRoutes.map(({path, element}) => (
                        <Route key={path} path={path} element={element}/>
                    ))}

                    {statusRoutes.map(({path, element}) => (
                        <Route key={path} path={path} element={element}/>
                    ))}

                    {/* Protected Customer Routes */}
                    <Route element={<ProtectedRoute/>}>
                        {protectedCustomerRoutes.map(({path, element}) => (
                            <Route key={path} path={path} element={element}/>
                        ))}
                    </Route>

                    {/* Admin Routes */}
                    <Route element={<AdminProtectedRoute/>}>
                        {adminRoutes.map(({path, element}) => (
                            <Route key={path} path={path} element={element}/>
                        ))}
                        {adminManagementRoutes.map(({path, element}) => (
                            <Route key={path} path={path} element={element}/>
                        ))}
                        {chartRoutes.map(({path, element}) => (
                            <Route key={path} path={path} element={element}/>
                        ))}
                        {appFeatureRoutes.map(({path, element}) => (
                            <Route key={path} path={path} element={element}/>
                        ))}
                    </Route>

                    {/* Landing Page */}
                    <Route path="/" element={<Landing/>}/>
                </Routes>
            </MainLayout>
        </Provider>
    );
}


export default App;
