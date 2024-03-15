import { Link } from 'react-router-dom'
import { forwardRef } from 'react'

const LinkItem = ({ to, text }) => {
  return (
    <li className="py-1">
      <Link to={to} className="transition-colors duration-300 hover:text-red-500">
        {text}
      </Link>
    </li>
  )
}

const Dropdown = forwardRef(({ title, items, icon }, ref) => {
  return (
    <>
      <li ref={ref} className="relative group">
        <button className="flex items-center px-4 py-2 text-gray-800 hover:text-red-500 ">
          {icon && <span className="me-2">{icon}</span>}
          <span>{title}</span>
        </button>

        <div className="bg-gray-600 dark:bg-white rounded-md hidden absolute text-left z-10 min-w-[200px] w-full group-hover:block group-focus:block">
          <ul className="p-4 m-1 border rounded-md text-white dark:text-gray-900 dark:border-gray-900">
            {items.map((item, index) => (
              <LinkItem key={index} to={item.to} text={item.text} />
            ))}
          </ul>
        </div>
      </li>
    </>
  )
})

export default Dropdown
