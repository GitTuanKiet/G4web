// assets
import { MdHome } from 'react-icons/md'

// constant
const icons = { MdHome }

// ==============================|| HOME MENU ITEMS ||============================== //

const home = {
  id: 'home',
  title: 'home',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'home',
      type: 'item',
      url: '/home',
      icon: icons.MdHome,
      breadcrumbs: false
    }
  ]
}

export default home
