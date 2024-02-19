import { useController } from 'react-hook-form'

function Input({ label, errors, control, ...rest }) {
  const { field } = useController({ control, name: rest.name })
  // console.log('errors' + errors)

  return (
    <div className="mb-4 w-full">
      <label htmlFor={rest.id || rest.name} className="font-medium text-sm text-gray-700">
        {label}
      </label>
      <input
        id={rest.id || rest.name}
        type={rest.type || 'text'}
        className="border border-gray-200 rounded-md py-3 px-4 w-full mt-1 focus:border-primary"
        {...field}
        {...rest}
      />
      {errors[rest.name] && <p className="text-red-500 text-xs italic ml-2 mt-1">{errors[rest.name]?.message}</p>}
    </div>
  )
}
export default Input
