/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import {store} from './state/store.ts'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1
    }
  }
})
const Home = lazy(()=>import('./features/home/components/home.tsx'))
const AuthPage = lazy(()=>import('./features/auth/components/authPage.tsx'))
const Cart = lazy(()=> import('./features/cart/components/Cart.tsx'))
const Product = lazy(()=>import('./features/products/components/products.tsx'))
const Users = lazy(()=>import('./features/users/components/users.tsx'))

const root = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <div>404</div>,
  children: [
    {
      path:"/login",
      element:<Suspense fallback={<div>Loading...</div>}><AuthPage/></Suspense>,
    },
    {
      index: true,
      element:<Suspense fallback={<div>Loading...</div>}><Home/></Suspense>,
    },
    {
      path:"/cart",
      element:<Suspense fallback={<div>Loading...</div>}><Cart/></Suspense>,
    },
    {
      path:"/products",
      element:<Suspense fallback={<div>Loading...</div>}><Product/></Suspense>,
    },
    {
      path:"/users",
      element:<Suspense fallback={<div>Loading...</div>}><Users/></Suspense>
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
