import { Link } from 'react-router-dom'

// project imports
import Logo from 'components/Logo'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {

  return (
    <Link to="/">
      <button className="focus:outline-none">
        <Logo />
      </button>
    </Link>
  )
}

export default LogoSection