// styles
const loaderWrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%'
}

// ==============================|| LOADER ||============================== //

const Loader = () => (
  <div style={loaderWrapperStyle}>
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="relative">
        <div className="h-2 bg-primary-main animate-pulse" />
      </div>
    </div>
  </div>
)

export default Loader
