

const Line = ({ keyName, value }) => {
  return (
    !!value && (
      <div className="flex justify-between">
        <span className="font-medium">{keyName}:</span>
        <span className="text-gray-500">{value}</span>
      </div>
    )
  )
}

export default Line