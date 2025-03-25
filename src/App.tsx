import {Provider} from "react-redux";
import "./App.css";
import {store} from "./redux/store";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";

// Admin
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customer from "./pages/Customer";
import Transaction from "./pages/Transaction";
import NewProduct from "./pages/management/NewProduct";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";
import BarCharts from "./pages/charts/BarCharts";
import LineCharts from "./pages/charts/LineCharts";
import PieCharts from "./pages/charts/PieCharts";
import Stopwatch from "./pages/apps/Stopwatch";
import CouponGenerator from "./pages/apps/CouponGenerator";
import Toss from "./pages/apps/Toss";

function App() {
    return (
        <Provider store={store}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<AllProducts/>}/>
                <Route path="/categories" element={<AllCategories/>}/>
                <Route path="/product/:productID" element={<SingleProduct/>}/>
                <Route path="/category/:slug" element={<SingleCategory/>}/>
                <Route path="/wishlist" element={<ProtectedRoute/>}>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                </Route>
                <Route path="/account" element={<ProtectedRoute/>}>
                    <Route path="/account" element={<Profile/>}/>
                </Route>
                <Route path="/" element={<Landing/>}/>
                <Route path="admin/dashboard" element={<Dashboard/>}/>
                <Route path="admin/products" element={<Products/>}/>
                <Route path="admin/customer" element={<Customer/>}/>
                <Route path="admin/transaction" element={<Transaction/>}/>
                <Route path="admin/product/new" element={<NewProduct/>}/>
                <Route path="admin/product/:id" element={<ProductManagement/>}/>
                <Route path="admin/transaction/:id" element={<TransactionManagement/>}/>
                <Route path="admin/transaction/:id" element={<TransactionManagement/>}/>
                <Route path="admin/chart/bar" element={<BarCharts/>}/>
                <Route path="admin/chart/line" element={<LineCharts/>}/>
                <Route path="admin/chart/pie" element={<PieCharts/>}/>
                <Route path="admin/app/stopwatch" element={<Stopwatch/>}/>
                <Route path="admin/app/coupon" element={<CouponGenerator/>}/>
                <Route path="admin/app/toss" element={<Toss/>}/>
            </Routes>
            <Toaster position="bottom-center" reverseOrder={false}/>
            <Footer/>
            <Cart/>
            <LoginModal/>
            <ScrollToTopButton/>
            <BannerPopup/>
        </Provider>
    );
}

export default App;
