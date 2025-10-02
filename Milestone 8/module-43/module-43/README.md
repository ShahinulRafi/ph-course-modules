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

Wrap your app with the Router (optional for advanced routing use createBrowserRouter):

import { BrowserRouter } from 'react-router-dom';
import App from './App';

<BrowserRouter>
  <App />
</BrowserRouter>

Or using the new router API (React Router v6.4+):

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
{ path: '/', element: <Home /> },
]);

<RouterProvider router={router} />

Implementing Routing

Define routes in your app:

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

Nested Routes

Nested routes allow a parent component to render children routes:

<Route path="/" element={<Root />}>
<Route index element={<Home />} />
<Route path="about" element={<About />} />
</Route>

index indicates the default child route.

Using <Outlet>

The parent component renders child routes using <Outlet>:

import { Outlet } from 'react-router-dom';

const Root = () => {
return (
<div>
<h1>Root Component</h1>
<Outlet /> {/_ Child routes will render here _/}
</div>
);
};

Static and Dynamic Routes

Static Route: Fixed path

<Route path="/about" element={<About />} />

Dynamic Route: Path with a parameter

<Route path="/users/:id" element={<UserDetails />} />

Access the parameter using useParams:

import { useParams } from 'react-router-dom';

const UserDetails = () => {
const { id } = useParams();
return <div>User ID: {id}</div>;
};

Data Loading

React Router supports loader functions for prefetching data:

<Route
path="/users"
loader={() => fetch('https://jsonplaceholder.typicode.com/users')}
element={<Users />}
/>

Access the data in the component:

import { useLoaderData } from 'react-router-dom';

const Users = () => {
const users = useLoaderData();
return (
<ul>
{users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
);
};

Navigation Hooks
useNavigate

Programmatically navigate to another route:

import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();

const handleLogin = () => {
// after login
navigate('/dashboard');
};

return <button onClick={handleLogin}>Login</button>;
};

useNavigation

Provides navigation state (loading, idle, etc.) for better UX:

import { useNavigation } from 'react-router-dom';

const Loader = () => {
const navigation = useNavigation();
if (navigation.state === 'loading') return <p>Loading...</p>;
return null;
};

useParams

Access dynamic route parameters:

const { id } = useParams(); // for /users/:id

Load Data Without Route (with Toggle and useState)

You can fetch and render data inside a component without using route loaders:

import { useState } from 'react';

const UsersToggle = () => {
const [users, setUsers] = useState([]);
const [show, setShow] = useState(false);

const fetchUsers = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();
setUsers(data);
};

return (
<div>
<button onClick={() => { setShow(!show); fetchUsers(); }}>Toggle Users</button>
{show && users.map(u => <div key={u.id}>{u.name}</div>)}
</div>
);
};

Custom 404 Component

Handle unmatched routes:

const NotFound = () => <h1>404 - Page Not Found</h1>;

<Routes>
  <Route path="*" element={<NotFound />} />
</Routes>

Additional Notes

Always use react-router-dom in React projects.

Use <Link> for navigation instead of <a> to avoid full page reloads.

Use Suspense + use() for asynchronous rendering if using React 18 experimental features.

Keep <Outlet> in layout components to render nested routes.

loader functions should return the fetch result.
