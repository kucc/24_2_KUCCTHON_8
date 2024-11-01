import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Select from './pages/User/Select';
import User from './pages/User/User';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user/:username',
    element: <User />,
  },
  {
    path: '/user/select/:username',
    element: <Select />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
