import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from 'shared/components/Button'
import Input from 'shared/components/Input'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  title: Yup.string().required('Tiêu đề là bắt buộc'),
  age_range: Yup.string().required('Độ tuổi là bắt buộc'),
  cover_img: Yup.string().url('Ảnh bìa phải là URL hợp lệ').required('Ảnh bìa là bắt buộc'),
  trailer_url_ytb: Yup.string().url('Trailler phải là URL hợp lệ').required('Trailler là bắt buộc'),
  duration: Yup.string().required('Thời lượng là bắt buộc'),
  language: Yup.string().required('Ngôn ngữ là bắt buộc'),
  premiere_date: Yup.date().required('Ngày khởi chiếu là bắt buộc'),
  end_date: Yup.date().required('Ngày dừng chiếu là bắt buộc'),
  genre: Yup.array().min(1, 'Thể loại là bắt buộc'),
  actors: Yup.string().required('Diễn viên là bắt buộc'),
  directors: Yup.string().required('Đạo diễn là bắt buộc')
})
function EditMovie() {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
    watch
  } = useForm({
    resolver: yupResolver(schema)
  })
  const genre = watch('genre', [])
  const handleChange = (event) => {
    setValue(
      'genre',
      event.target.checked ? [...genre, event.target.value] : genre.filter((g) => g !== event.target.value)
    )
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-[#D9D9D9] py-10">
      <h1 className="uppercase text-2xl  text-center">sửa phim</h1>
      <div className="mx-20 pb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Tiêu đề" name="title" control={control} errors={errors} />
          <Input label="Độ tuổi" name="age_range" control={control} errors={errors} />
          <Input label="Ảnh bìa(url)" name="cover_img" control={control} errors={errors} />
          <Input label="Trailler (url youtube)" name="trailer_url_ytb" control={control} errors={errors} />
          <Input label="Thời lượng" name="duration" control={control} errors={errors} />
          <Input label="Ngôn ngữ" name="language" control={control} errors={errors} />
          <Input label="Ngầy khởi chiếu" type="date" name="premiere_date" control={control} errors={errors} />
          <Input label="Ngày dừng chiếu" type="date" name="end_date" control={control} errors={errors} />
          <div>
            Thể loại <br />
            <div className="flex gap-x-3 items-center">
              <label>
                <input
                  type="checkbox"
                  name="genre"
                  checked={genre.includes('action')}
                  onChange={handleChange}
                  onBlur={handleChange}
                  {...register('genre')}
                  value="action"
                />{' '}
                Hành động
              </label>
              <label>
                <input
                  type="checkbox"
                  name="genre"
                  checked={genre.includes('romantic')}
                  onChange={handleChange}
                  onBlur={handleChange}
                  {...register('genre')}
                  value="romantic"
                />{' '}
                Tình cảm
              </label>
              <label>
                <input
                  type="checkbox"
                  name="genre"
                  checked={genre.includes('cartoon')}
                  onChange={handleChange}
                  onBlur={handleChange}
                  {...register('genre')}
                  value="cartoon"
                />{' '}
                Hoạt hình
              </label>
              <label>
                <input
                  type="checkbox"
                  name="genre"
                  checked={genre.includes('comedy')}
                  onChange={handleChange}
                  onBlur={handleChange}
                  value="comedy"
                  {...register('genre')}
                />{' '}
                Hài hước
              </label>
              <label>
                <input
                  type="checkbox"
                  name="genre"
                  checked={genre.includes('horror')}
                  onChange={handleChange}
                  onBlur={handleChange}
                  {...register('genre')}
                  value="horror"
                />{' '}
                Kinh dị
              </label>
            </div>
          </div>
          <Input label="Diễn viên" name="actors" control={control} errors={errors} />
          <Input label="Đạo diễn" name="directors" control={control} errors={errors} />
          <div className="float-right space-x-3 clear-both">
            <Button primary to="/admin">
              {' '}
              Hủy{' '}
            </Button>
            <Button primary> Lưu phim</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditMovie
