// assets
import { FaKey } from 'react-icons/fa'

// constant
const icons = {
  FaKey
}

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.FaKey,

      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/auth/login',
          target: true
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: '/auth/register',
          target: true
        },
        {
          id: 'forgot-password',
          title: 'Forgot Password',
          type: 'item',
          url: '/auth/forgot-password',
          target: true
        }
      ]
    }
  ]
}

export default pages
