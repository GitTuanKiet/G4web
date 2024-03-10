import { NavLink } from 'react-router-dom'
import IconChevronRight from 'components/icons/IconChevronRight'

function Sidebar({ sidebarLinks }) {
  return (
    <div>
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 w-[250px]   mt-10 rounded-xl transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 rounded-2xl border border-gray-300 overflow-y-auto bg-gray-50 dark:bg-[#FAEBE9]">
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={link?.onClick}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary block px-4 py-2 '
                      : 'block px-4 py-2 text-gray-900 dark:text-slate-800  dark:hover:text-primary'
                  }
                >
                  <div className="flex items-center justify-between">
                    {/* {link.icon} */}
                    <span className="ml-2">{link.title}</span>
                    <IconChevronRight />
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
