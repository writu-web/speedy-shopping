import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import Cart from './features/cart/components/Cart.tsx'
import {store} from './state/store.ts'
import AuthPage from './features/auth/components/authPage.tsx'
import Product from './features/products/components/products.tsx'
import Home from './features/home/components/home.tsx'
import Users from './features/users/components/users.tsx'
const queryClient = new QueryClient()

const root = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <div>404</div>,
  children: [
    {
      path:"/login",
      element:<AuthPage/>,
    },
    {
      index: true,
      element:<Home/>,
    },
    {
      path:"/cart",
      element:<Cart/>,
    },
    {
      path:"/products",
      element:<Product/>,
    },
    {
      path:"/users",
      element:<Users/>
    }
  ] 
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={root}/>
    </QueryClientProvider>
    </Provider>
  </StrictMode>,

)
