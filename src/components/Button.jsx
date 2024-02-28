import { Link } from 'react-router-dom'

function Button({
  to,
  href,
  children,
  isLoading,
  primary = false,
  outline = false,
  wFull = false,
  disabled = false,
  size,
  className: externalClassName, // Thêm prop className để nhận thêm className từ bên ngoài
  style,
  ...passProps
}) {
  let Comp = 'button'
  const props = {
    ...passProps
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

  let defaultClassName = `rounded-lg text-white min-w-[100px]  py-2 px-4 hover:opacity-85 border border-transparent 
    ${primary ? 'bg-primary' : '!border-primary !text-primary '} 
    ${wFull ? 'w-full py-4' : ''}
    ${disabled ? 'opacity-40 hover:opacity-40 pointer-events-none' : ''}  
    ${size === 'xl' ? 'h-full' : ''}
    `

  let className = `${defaultClassName} ${externalClassName || ''}`

  return (
    <Comp className={className} style={style} {...props}>
      {children}
    </Comp>
  )
}

export default Button
