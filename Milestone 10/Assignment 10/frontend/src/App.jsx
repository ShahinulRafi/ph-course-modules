import { Outlet } from "react-router";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </div>
    </>
  );
}

export default App;
