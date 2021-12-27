import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import CreateReview from "./components/Reviews/CreateReview/CreateReview";
import EditReview from "./components/Reviews/EditReview/EditRevieview";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import MovieDetails from "./components/Shared/MovieDetails/MovieDetails";
import NotFound from "./components/Shared/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Reviews from "./components/Reviews/Reviews";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Header />
        <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore/*" element={<Explore />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:movieId" element={<MovieDetails />} />
            <Route path="/reviews/create" element={<CreateReview />} />
            <Route path="/reviews/edit/:reviewId" element={<EditReview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
