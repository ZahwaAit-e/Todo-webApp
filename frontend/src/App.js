import React, { useEffect } from "react";
import Home from "./page/Home/Home";
import Tasks from "./page/Task/Tasks";
import Monthly from "./page/monthly/Monthly";
import Login from "./page/Login/Login";
import Signup from "./page/signup/Signup";
import Contact from "./page/Contact/contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import Video from "./components/video/Video";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./page/NotFound/NotFound";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/Monthly" element={<Monthly />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      {/* <Video /> */}
    </Router>
  );
};

export default App;
