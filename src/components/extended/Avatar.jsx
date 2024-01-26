import PropTypes from 'prop-types'

// styles
const getColorStyle = (color, outline, theme) => {
  if (color && !outline) {
    return { color: theme.palette.background.paper, backgroundColor: `${color}.main` }
  } else if (outline) {
    return {
      color: color ? `${color}.main` : 'primary.main',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid',
      borderColor: color ? `${color}.main` : 'primary.main'
    }
  } else {
    return {}
  }
}

const getSizeStyle = (size, theme) => {
  switch (size) {
  case 'badge':
    return {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5)
    }
  case 'xs':
    return {
      width: theme.spacing(4.25),
      height: theme.spacing(4.25)
    }
  case 'sm':
    return {
      width: theme.spacing(5),
      height: theme.spacing(5)
    }
  case 'lg':
    return {
      width: theme.spacing(9),
      height: theme.spacing(9)
    }
  case 'xl':
    return {
      width: theme.spacing(10.25),
      height: theme.spacing(10.25)
    }
  case 'md':
    return {
      width: theme.spacing(7.5),
      height: theme.spacing(7.5)
    }
  default:
    return {}
  }
}

const Avatar = ({ color, outline, size, sx, ...others }) => {

  const colorStyle = getColorStyle(color, outline)
  const sizeStyle = getSizeStyle(size)

  return <div className={`rounded-full ${colorStyle} ${sizeStyle} ${sx}`} {...others} />
}

Avatar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.string,
  sx: PropTypes.string
}

export default Avatar
