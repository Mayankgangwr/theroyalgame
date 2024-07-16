
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import { Dashboard, Home } from "./Pages";
import { useEffect, useState } from 'react';
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <AuthLayout authentication={false}>
  //         <Dashboard />
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/orders',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Orders</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/billing',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Billing</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/teams',
  //       element: <AuthLayout authentication={false}>
  //         <h1>My Team</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/inventory',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Inventory</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/reports',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Reports</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/settings',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Settings</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/help',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Help</h1>
  //       </AuthLayout>
  //     },
  //     {
  //       path: '/logout',
  //       element: <AuthLayout authentication={false}>
  //         <h1>Logout</h1>
  //       </AuthLayout>
  //     },
  //   ]
  // },
  {
    path: '/home',
    element: <AuthLayout authentication={false}>
      <Home />
    </AuthLayout>
  },
  {
    path: '/dashboard',
    element: <AuthLayout authentication={false}>
      <Dashboard />
    </AuthLayout>
  },

]);
export default function App() {
  enum Theme {
    Dark = "dark",
    Light = "light"
  }
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(Theme.Light);
  const handleTheme = async () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  }

  useEffect(() => {

    handleTheme();
  }, []);


  return (
    <FluentProvider theme={theme === Theme.Light ? webLightTheme : webLightTheme}>
      {!loading ? (<RouterProvider router={router} />) : <>Loading...</>}
    </FluentProvider>
  );
}