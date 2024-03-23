import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from 'shared/components/Button'
import Input from 'shared/components/Input'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  cinema: Yup.string().required('Rạp là bắt buộc'),
  movie: Yup.string().required('Phim là bắt buộc'),
  broadcast_time: Yup.array().min(1, 'Thời gian chiếu là bắt buộc'),
  release_date: Yup.date().required('Ngày chiếu là bắt buộc'),
  end_date: Yup.date().required('Ngày dừng chiếu là bắt buộc'),
  price_ticket: Yup.number().required('Giá vé là bắt buộc')
})
function EditBroadcast() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      broadcast_time: []
    },
    resolver: yupResolver(schema)
  })
  const broadcast_time = watch('broadcast_time', [])
  const handleChange = (event) => {
    setValue(
      'broadcast_time',
      event.target.checked
        ? [...broadcast_time, event.target.value]
        : broadcast_time.filter((g) => g !== event.target.value)
    )
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-[#D9D9D9] py-10">
      <h1 className="uppercase text-2xl  text-center">Sửa suất chiếu</h1>
      <div className="mx-20 pb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <select
              {...register('cinema')}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="1">Rạp 1</option>
              <option value="2">Rạp 2</option>
              <option value="3">Rạp 3</option>
            </select>
            {errors.cinema && <p>{errors.cinema.message}</p>}
          </div>
          <div>
            <label>Tên phim</label>
            <select
              {...register('movie')}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="1">Phim 1</option>
              <option value="2">Phim 2</option>
              <option value="3">Phim 3</option>
            </select>
            {errors.cinema && <p>{errors.cinema.message}</p>}
          </div>
          <div>
            Giờ chiếu <br />
            <div className="flex gap-x-3 items-center">
              <label>
                <input
                  type="checkbox"
                  name="broadcast_time"
                  checked={broadcast_time.includes('9:00')}
                  onChange={handleChange}
                  {...register('broadcast_time')}
                  value="9:00"
                />{' '}
                9:00
              </label>
              <label>
                <input
                  type="checkbox"
                  name="broadcast_time"
                  checked={broadcast_time.includes('11:00')}
                  onChange={handleChange}
                  {...register('broadcast_time')}
                  value="11:00"
                />{' '}
                11:00
              </label>
              <label>
                <input
                  type="checkbox"
                  name="broadcast_time"
                  checked={broadcast_time.includes('13:00')}
                  onChange={handleChange}
                  {...register('broadcast_time')}
                  value="13:00"
                />{' '}
                13:00
              </label>
              <label>
                <input
                  type="checkbox"
                  name="broadcast_time"
                  checked={broadcast_time.includes('15:00')}
                  onChange={handleChange}
                  value="15:00"
                  {...register('broadcast_time')}
                />{' '}
                15:00
              </label>
              <label>
                <input
                  type="checkbox"
                  name="broadcast_time"
                  checked={broadcast_time.includes('17:00')}
                  onChange={handleChange}
                  {...register('broadcast_time')}
                  value="17:00"
                />{' '}
                17:00
              </label>
              {errors.broadcast_time && <p className="text-red-500 text-xs italic ">{errors.broadcast_time.message}</p>}
            </div>
            <div>
              <label>Ngày chiếu</label>
              <Input control={control} errors={errors} type="date" name="release_date" />
            </div>
            <div>
              <label>Ngày dừng chiếu</label>
              <Input control={control} errors={errors} type="date" name="end_date" />
            </div>
            <Input control={control} errors={errors} label="Giá suất chiếu" name="price_ticket" />
            <div className="float-right space-x-3 clear-both">
              <Button primary type="submit">
                Thêm
              </Button>
              <Button onClick={() => navigate(-1)}>Hủy</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBroadcast
