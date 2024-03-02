import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar({ sidebarLinks }) {
  return (
    <div>
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 w-[290px] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={link?.onClick}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary block px-4 py-2 '
                      : 'block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                >
                  <div className="flex items-center">
                    {link.icon}
                    <span className="ml-2">{link.title}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* <div className="p-4 sm:ml-64">


      </div> */}
    </div>
  )
}

export default Sidebar
