import MainLayout from './layouts/MainLayout'
import { Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Broadcast from './pages/Broadcast'
import Movies from './pages/Movies'
import Revenue from './pages/Revenue'
import AddMovie from './pages/Movies/add'
import EditMovie from './pages/Movies/edit'
import DetailMovie from './pages/Movies/detail'
import AddBroadcast from './pages/Broadcast/add'
import EditBroadcast from './pages/Broadcast/edit'
const AdminRoutes = (isAuthenticated, role) => {
  return {
    path: '/admin',
    element: isAuthenticated && role === 'admin' ? <MainLayout /> : <Navigate to="/auth/login" />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: '',
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Home />
      },
      {
        path: 'manage',
        children: [
          {
            path: 'broadcast',
            children: [
              {
                path: '',
                element: <Broadcast />
              },
              {
                path: 'create',
                element: <AddBroadcast />
              },
              {
                path: 'edit/:id',
                element: <EditBroadcast />
              },
              {
                path: 'detail/:id',
                element: <Broadcast />
              }
            ]
          },

          //  movie routes management
          {
            path: 'movies',
            children: [
              {
                path: '',
                element: <Home />
              },
              {
                path: 'create',
                element: <AddMovie />
              },
              {
                path: 'edit/:id',
                element: <EditMovie />
              },
              {
                path: 'detail/:id',
                element: <DetailMovie />
              }
            ]
          },
          // revenue routes management
          {
            path: 'revenue',
            children: [
              {
                path: '',
                element: <Revenue />
              }
            ]
          }
        ]
      }
    ]
  }
}

export default AdminRoutes
