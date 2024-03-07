

const Divider = ({ border, white }) => {
  return (
    <hr className={`border-t ${border? 'border' :'border-dashed'} ${white ? 'border-white':'border-black'} my-4`} />
  )
}

export default Divider