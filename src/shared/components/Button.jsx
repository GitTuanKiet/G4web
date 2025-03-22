import { Link } from 'react-router-dom'

function Button({
  to,
  href,
  children,
  loading = false,
  primary = false,
  wFull = false,
  disabled = false,
  noborder = false,
  size,
  small = false,
  className, // Thêm prop className để nhận thêm className từ bên ngoài
  style,
  ...passProps
}) {
  let Comp = 'button'
  const props = {
    ...passProps
  }

  if (loading) {
    disabled = true
  }

  if (to) {
    Comp = Link
    props.to = to
  } else if (href) {
    Comp = 'a'
    props.href = href
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  let defaultClassName = `rounded-lg text-white border border-transparent cursor-pointer 
    ${primary ? 'bg-primary' : '!border-primary !text-primary '} 
    ${wFull ? 'w-full py-4' : ''}
    ${disabled ? 'opacity-40' : 'opacity-80 hover:opacity-100 transition-opacity'}
    ${size === 'xl' ? 'h-full' : ''}
    ${small ? 'text-xs py-0 px-3 min-w-[50px]' : 'px-4 py-2 min-w-[100px]'}
    ${noborder ? 'border-0' : ''}
    `

  let externalClassName = `${defaultClassName} ${className || ''}`

  return (
    <Comp className={externalClassName} style={style} {...props}>
      {loading ? 'Đang xử lý' : children}
    </Comp>
  )
}

export default Button
