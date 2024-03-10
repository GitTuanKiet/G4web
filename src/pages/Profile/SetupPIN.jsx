import Input from 'components/Input'
import * as Yup from 'yup'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setupPIN } from 'stores/user/slice'
import { useFormSubmit } from 'utils/form'

function SetupPIN() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const schemaProfile = Yup.object({
    newPIN: Yup.number().required('New PIN is required').min(6, 'PIN must be at least 6 characters'),
    confirmPIN: Yup.number().oneOf([Yup.ref('newPIN'), null], 'PINs must match')
  })

  const call = (data) => {
    dispatch(setupPIN(data))
  }

  const { handleOnSubmit, control, errors, isSubmitting } = useFormSubmit(schemaProfile, {
    newPIN: '',
    confirmPIN: ''
  }, call)

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">THAY ĐỔI MÃ PIN</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-full bg-white p-10 rounded-lg shadow-md mt-10"
      >
        <div className="flex justify-between w-full gap-10">
          <Input label="Mã PIN mới" placeholder="Mã PIN mới" name="newPIN" control={control} errors={errors} />
        </div>
        <div className="flex justify-between w-full gap-10">
          <Input label="Xác nhận Mã PIN" placeholder="Xác nhận Mã PIN" name="confirmPIN" control={control} errors={errors} />
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button onClick={() => navigate(-1)}>
          &lt;&lt; Quay lại
          </Button>
          <Button onClick={handleOnSubmit} primary loading={isSubmitting}>
              Xác nhận
          </Button>
        </div>
      </form>
    </div>
  )
}
export default SetupPIN