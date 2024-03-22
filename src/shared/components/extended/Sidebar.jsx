import { NavLink } from 'react-router-dom'
import IconChevronRight from 'components/icons/IconChevronRight'
import { useState } from 'react'

function Sidebar({ sidebarLinks }) {
  const [open, setOpen] = useState(false)

  const handleClick = (logout) => {
    setOpen(false)
    if (logout) logout()
  }
  return (
    <div
      id="default-sidebar"
      className={`top-0 left-0 z-40 mobile:w-[250px]  w-[300px]  relative mt-10 rounded-xl transition-transform  sm:translate-x-0 ${
        open ? 'mobile:translate-x-0' : 'mobile:-translate-x-[106%] mobile:transition-transform mobile:duration-300 '
      }`}
      aria-label="Sidebar"
    >
      <span
        className={` desktop:hidden bg-[#FAEBE9] border border-slate-400 p-1 rounded-full text-primary  absolute right-0 translate-x-2/4 top-[6%] ${
          open ? 'rotate-180 transition-transform duration-400' : 'transition-transform duration-400'
        }`}
        onClick={() => setOpen(!open)}
      >
        <IconChevronRight />
      </span>

      <div className="h-full px-3 py-4 rounded-2xl border border-gray-300 overflow-y-auto bg-gray-50 dark:bg-[#FAEBE9]">
        <ul className="space-y-2 font-medium">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link?.path}
                onClick={() => handleClick(link?.onClick)}
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
    </div>
  )
}

export default Sidebar