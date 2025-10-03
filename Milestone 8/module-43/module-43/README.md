React Router - Beginner Documentation
This repository demonstrates the use of React Router in React projects. It covers basic routing, nested routes, data loading, navigation hooks, and error handling.
Table of Contents

Installation and Integration
Implementing Routing
Nested Routes
Using <Outlet>
Static and Dynamic Routes
Data Loading
Navigation Hooks
useNavigate
useNavigation
useParams


Load Data Without Route
Custom 404 Component
Additional Notes


Installation and Integration
Install React Router DOM:
npm install react-router-dom

Wrapping the App
Option 1: Basic Router (using <Routes> and <Route>)
Wrap your app with the <BrowserRouter> component (optional for advanced routing; use createBrowserRouter):
import { BrowserRouter } from 'react-router-dom';
import App from './App';

<BrowserRouter>
  <App />
</BrowserRouter>

Option 2: New Router API (React Router v6.4+ for Data API)
Use createBrowserRouter and <RouterProvider>:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  // ... more routes
]);

<RouterProvider router={router} />

Implementing Routing
Define routes using <Routes> and <Route>:
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

Nested Routes
Nested routes allow a parent component (often a layout) to render children routes within itself:
<Route path="/" element={<Root />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>

The index prop indicates the default child route for the parent path (/).
Using <Outlet>
The parent component (e.g., Root) uses the <Outlet> component to define where its child routes should be rendered:
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <h1>Root Component (Layout)</h1>
      <Outlet /> {/* Child routes will render here */}
    </div>
  );
};

Static and Dynamic Routes
Static Route
A route with a fixed path:
<Route path="/about" element={<About />} />

Dynamic Route
A route path with a parameter, defined by a colon (:id):
<Route path="/users/:id" element={<UserDetails />} />

Access the parameter within the component using the useParams hook:
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams(); // Retrieves the 'id' from the URL
  return <div>User ID: {id}</div>;
};

Data Loading
React Router v6.4+ supports loader functions for prefetching data before the component renders. This requires using the createBrowserRouter API.
Define the Loader
// In your route definition (passed to createBrowserRouter)
const userRoutes = {
  path: "/users",
  loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
  element: <Users />,
};

Access the Data
Use the useLoaderData hook in the associated component:
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  // users will contain the resolved data from the loader's fetch call
  const users = useLoaderData(); 
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

Navigation Hooks
useNavigate
Used to programmatically navigate to a different route:
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    // After successful login, navigate to the dashboard
    navigate('/dashboard'); 
    // You can also use: navigate(-1) for 'go back'
  };

  return <button onClick={handleLogin}>Login</button>;
};

useNavigation
Provides information about the current navigation state (idle, loading, submitting) for displaying better user experience (UX) elements like loading spinners:
import { useNavigation } from 'react-router-dom';

const Loader = () => {
  const navigation = useNavigation();
  
  if (navigation.state === 'loading') {
    return <p>Loading...</p>;
  }
  
  return null;
};

useParams
Used to access dynamic route parameters (as shown in the Static and Dynamic Routes section):
const { id } = useParams(); // Retrieves the 'id' from a path like /users/123

Load Data Without Route (with Toggle and useState)
You can fetch and render data inside a component using standard React hooks (useState, useEffect) without using React Router's loader functions.
import { useState } from 'react';

const UsersToggle = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  };

  const handleToggle = () => {
    setShow(!show);
    // Only fetch if we are about to show the data (optional)
    if (!show) {
      fetchUsers();
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {show ? 'Hide Users' : 'Show Users'}
      </button>
      {show && users.map(u => <div key={u.id}>{u.name}</div>)}
    </div>
  );
};

Custom 404 Component
Handle unmatched routes by defining a route with the path set to * (wildcard):
const NotFound = () => <h1>404 - Page Not Found</h1>;

<Routes>
  {/* All other specific routes go here */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  
  {/* This route catches any path that hasn't been matched above */}
  <Route path="*" element={<NotFound />} /> 
</Routes>

Note: If using createBrowserRouter, you define a 404/Error page using the errorElement property, often on the root route.
Additional Notes

Always use react-router-dom in web React projects.
Use the <Link> component for internal navigation instead of <a> tags to prevent full page reloads.
Keep <Outlet> in your layout components (Root, etc.) to correctly render nested routes.
loader functions in React Router's data API should return the fetch result (a Promise) which will be resolved before the component renders.
