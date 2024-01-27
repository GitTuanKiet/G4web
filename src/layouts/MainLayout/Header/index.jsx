import PropTypes from 'prop-types'

// project imports
import LogoSection from '../LogoSection'


// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  return (
    <>
      {/* logo */}
      <div className="flex items-center">
        <div className="hidden md:block">
          <LogoSection />
        </div>
      </div>
      <div className="flex-grow" />
      <div className="flex-grow" />
    </>
  )
}

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
}

export default Header
