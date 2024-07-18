
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import { BankAccount, BuyNow, Dashboard, Game, Home, Leaderboard, MyMatches, Pricing, Withdraw } from "./Pages";
import { useEffect, useState } from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <AuthLayout authentication={false}>
          <Dashboard />
        </AuthLayout>
      },
      {
        path: '/game',
        element: <AuthLayout authentication={false}>
          < Game />
        </AuthLayout>
      },
      {
        path: '/mymatch',
        element: <AuthLayout authentication={false}>
          <MyMatches />
        </AuthLayout>
      },
      {
        path: '/pricing',
        element: <AuthLayout authentication={false}>
          <Pricing />
        </AuthLayout>
      },
      {
        path: '/buynow',
        element: <AuthLayout authentication={false}>
          <BuyNow />
        </AuthLayout>
      },
      {
        path: '/withdraw',
        element: <AuthLayout authentication={false}>
          <Withdraw />
        </AuthLayout>
      },
      {
        path: '/bankaccount',
        element: <AuthLayout authentication={false}>
          <BankAccount />
        </AuthLayout>
      },
      {
        path: '/leaderboard',
        element: <AuthLayout authentication={false}>
          <Leaderboard />
        </AuthLayout>
      },
      {
        path: '/logout',
        element: <AuthLayout authentication={false}>
          <h1>Logout</h1>
        </AuthLayout>
      },
    ]
  },
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