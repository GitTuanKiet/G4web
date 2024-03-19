import Button from 'components/Button'
import Divider from 'components/Divider'
import Input from 'components/Input'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { handleSubmit, control, formState: errors } = useForm({})

  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
  }

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.739217625594!2d105.81286707596917!3d21.003088188658456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9ae41badf5%3A0xd2d0ecc9056aa82f!2sCGV%20Vincom%20Royal%20City!5e0!3m2!1sen!2s!4v1710810112100!5m2!1sen!2s"
        width="600"
        height="450"
        style={{
          width: '100%'
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex justify-between gap-x-6 mt-6">
        <div className="w-2/4 ">
          <div className="pb-4">
            <h1 className="uppercase text-xl border-b border-gray-500  inline-block ">Trụ sở chính</h1>
            <p className="mt-3">Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
          </div>
          <div className="pb-4">
            <h1 className="uppercase text-xl border-b border-gray-500  inline-block ">Trụ sở chính</h1>
            <p className="mt-3">Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
          </div>
          <div className="pb-4">
            <h1 className="uppercase text-xl border-b border-gray-500  inline-block ">Trụ sở chính</h1>
            <p className="mt-3">Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
          </div>
          <div className="pb-4">
            <h1 className="uppercase text-xl border-b border-gray-500  inline-block ">Trụ sở chính</h1>
            <p className="mt-3">Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
          </div>
          <div className="pb-4">
            <h1 className="uppercase text-xl border-b border-gray-500  inline-block ">Trụ sở chính</h1>
            <p className="mt-3">Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
          </div>
          <div className="pb-4">
            <h1 className="uppercase text-xl border-b border-gray-500  inline-block ">Trụ sở chính</h1>
            <p className="mt-3">Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, Thành phố Hồ Chí Minh.</p>
          </div>
        </div>
        <div>{/* <Divider /> */}</div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email" placeholder="Địa chỉ email" name="email" control={control} errors={errors} />
            <Input label="Tên" name="name" control={control} errors={errors} />
            <Input label="Điện thoại" name="phoneNumber" control={control} errors={errors} />
            <div>
              <label htmlFor="" className="block">
                Nội dung cần liên hệ
              </label>
              <textarea cols="3" rows="6" className="w-full outline-none border "></textarea>
            </div>
            <Button className="float-right" primary>
              Gửi đi
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
