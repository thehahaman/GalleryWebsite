import './App.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import "./styles.scss";

const router = createBrowserRouter([{
  path: "/",
  element: <Home />
}, {
  path: "/about",
  element: <About />
}, {
  path: "/photos",
  element: <Photos />
}])

function App() {
  return (
    <div className="App">
      <div className='container'>
          <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
