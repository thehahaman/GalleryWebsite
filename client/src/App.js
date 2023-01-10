import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Link
} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


const router = createBrowserRouter([{
  path: "/",
  element: <Home />,
  errorElement: <ErrorBoundary />
}, {
  path: "/about",
  element: <About />,
  errorElement: <ErrorBoundary />
}, {
  path: "/Projects",
  element: <Projects />,
  errorElement: <ErrorBoundary />
}])

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);

  return (
    <div className='error'>You're not supposed to be here!
      <Link className='goBack' to="/">go back</Link>
    </div>
  );
}

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
