import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import AddCoffee from '../pages/AddCoffee'
import Products from '../pages/Products'
import UpdateCoffee from '../pages/UpdateCoffee'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Products></Products>,
                loader: ()=> fetch('http://localhost:5000/coffee')
            },
            {
                path: '/update/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                // loader: ({params})=> fetch('http://localhost:5000/coffee')
            }
        ]
    },
    {
        path: '/coffee',
        element: <AddCoffee></AddCoffee>
    },
    
])

export default router

