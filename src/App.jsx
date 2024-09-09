import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Table from './pages/Table.jsx'
import Layout from './layout/Layout.jsx'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: "table",
                    element: <Table/>,
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
