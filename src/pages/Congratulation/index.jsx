import SucceededImage from 'assets/images/image_succeeded.png'
import Button from 'components/Button'
function Congratulation() {
  return (
    <div className="mx-auto text-center my-10">
      <img src={SucceededImage} alt="" className="w-full " />
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Congratulation!</h1>
        <h2 className="mb-10">
          You have successfully completed the payment process. Thank you for choosing our service!
        </h2>
        <Button to="/">Go back home</Button>
      </div>
    </div>
  )
}
export default Congratulation
