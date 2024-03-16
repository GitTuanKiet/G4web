import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import Input from 'components/Input'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

const schema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 8 characters '),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

const tabs = [
  {
    id: 1,
    title: 'TẠI SAO LẠI LÀ PHIM – TẠI SAO LẠI LÀ CGV?',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/group-sale/hinh_1.JPG',
    description:
      '<div><p>Hoạt động gắn kết tập thể phù hợp</p><p>Chăm sóc đời sống tinh thần nhân viên.</p><p>Thưởng thức nghệ thuật thứ Bảy, văn minh.</p><p>Chi phí phù hợp, tiết kiệm cho doanh nghiệp.</p><p>- Liên hệ ngay với chúng tôi để trải nghiệm dịch vụ: đặt chỗ như ý, giá ưu đãi khách đoàn, đặt trước lịch phim phù hợp.</p><p>- Áp dụng cho đoàn từ 20 người trở lên.</p><p>- Chiết khấu lớn với hợp đồng dài hạn.</p></div>'
  },
  {
    id: 2,
    title: 'Món quà sang trọng và ý nghĩa',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/group-sale/img_2.jpg',
    description:
      '<div class="groupsale-left"><p>Vì bạn đặt biệt -&gt; người ẤY đặc biệt -&gt; Suất chiếu riêng</p><p>Hãy để CGV giúp bạn tổ chức những buổi tiệc hay sự kiện đặc biệt! Bất kể là một buổi xem phim thân mật, hay một sự kiện, hay một buổi lễ cầu hôn, CGV là lựa chọn hàng đầu dành cho bạn. Cùng xem qua các ý tưởng sáng tạo tại CGV nhé!</p><p>- Liên hệ ngay với chúng tôi để trải nghiệm dịch vụ: đặt chỗ như ý, giá ưu đãi bao phòng, đặt trước lịch phim phù hợp.</p><p>- Phòng chiếu riêng: tự chọn phim, chọn giờ, chiếu clip kỉ niệm, tự trang trí phòng chiếu theo phong cách của bạn.</p></div>'
  },
  {
    id: 3,
    title: 'Chi phí marketing hợp lí',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/group-sale/thu_rap.png',
    description:
      '<div class="groupsale-left"><p>Thuê phòng chiếu làm sự kiện, Ra mắt sản phẩm, họp công ty, hội nghị khách hàng.</p><p>Bạn đang tìm giải pháp giới thiệu sản phẩm hoặc quảng cáo độc đáo để tăng doanh thu cho công ty?</p><p>Bạn muốn tổ chức hội thảo hoặc một chương trình có ý nghĩa cho đối tác thay cho lời cảm ơn về mối hợp tác lâu bền?</p><p>- Ra mắt sản phẩm/dự án với hình ảnh minh họa siêu khủng trên màn hình hiện đại của CGV.</p><p>- Không gian khán đài.</p><p>- Tầm nhìn tập trung 100%, choáng ngợp.</p><p>- Âm thanh lập thể, chia đều tới từng người nghe. Không gây khó chịu cho người ngồi gần.</p><p>- Tham khảo: <a href="https://www.youtube.com/watch?v=GwdTXGlG1iI" target="_blank">https://youtu.be/GwdTXGlG1iI</a></p></div>'
  },
  {
    id: 4,
    title: 'TẠI SAO LẠI LÀ PHIM – TẠI SAO LẠI LÀ CGV?',
    image: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/group-sale/hinh_1.JPG',
    description:
      '<div><p>Hoạt động gắn kết tập thể phù hợp</p><p>Chăm sóc đời sống tinh thần nhân viên.</p><p>Thưởng thức nghệ thuật thứ Bảy, văn minh.</p><p>Chi phí phù hợp, tiết kiệm cho doanh nghiệp.</p><p>- Liên hệ ngay với chúng tôi để trải nghiệm dịch vụ: đặt chỗ như ý, giá ưu đãi khách đoàn, đặt trước lịch phim phù hợp.</p><p>- Áp dụng cho đoàn từ 20 người trở lên.</p><p>- Chiết khấu lớn với hợp đồng dài hạn.</p></div>'
  }
]

const Cinemas = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
  }

  return (
    <div>
      <h1 className="text-primary text-3xl text-center my-6 font-semibold uppercase">
        Thuê rạp/ Sự kiện <br></br>& Vé nhóm
      </h1>

      <div className="mt-4 flex justify-between gap-x-5 mobile:flex-col">
        <div>
          <iframe
            width="340"
            height="250"
            src="https://www.youtube.com/embed/GwdTXGlG1iI?si=rhSMwm7lpzZ-3LBC"
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-sm text-justify">
          Bạn đang tìm giải pháp quảng cáo độc đáo để tăng doanh thu cho công ty? Bạn muốn gửi quà tặng có ý nghĩa đến
          đối tác thay cho lời cảm ơn về mối hợp tác lâu bền? <br />
          Bạn muốn thưởng thức những bộ phim bom tấn thật riêng tư cùng bạn bè, người thân hay đồng nghiệp?
          <br /> Với kinh nghiệm dẫn đầu trong việc tổ chức sự kiện chiếu phim trong không gian riêng biệt, cung cấp vé
          xem phim hoặc thẻ quà tặng với số lượng lớn cho doanh nghiệp, chúng tôi tự hào sẽ mang đến cho đối tác những
          giải pháp điện ảnh chuyên nghiệp
        </p>
      </div>

      <div className="mb-[200px]">
        <h1 className="text-primary text-3xl text-center my-6 font-semibold uppercase">Dịch vụ của chúng tôi</h1>
      </div>
      <div>
        <h1 className="text-primary text-3xl text-center my-6 font-semibold uppercase">Lập kế hoạch cùng CGV ngay</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between w-full gap-10 mobile:flex-col">
            <Input label="Họ Tên" placeholder="Họ Tên" name="name" control={control} errors={errors} />
            <Input
              label="Số điện thoại"
              placeholder="Số diện thoại"
              name="phone_number"
              control={control}
              errors={errors}
            />
          </div>
          <div className="flex justify-between w-full gap-10 mobile:flex-col">
            <Input label="Email" placeholder="email" name="name" control={control} errors={errors} />
            <Input label="Địa chỉ" placeholder="Địa chỉ" name="address" control={control} errors={errors} />
          </div>
          <div className="flex justify-between w-full gap-10 mobile:flex-col">
            <Input label="Công ty" placeholder="công ty" name="company" control={control} errors={errors} />
            <Input
              label="Chọn dịch vụ"
              placeholder="chọn dịch vụ"
              name="server_type"
              control={control}
              errors={errors}
            />
          </div>
          <div className="flex justify-between w-full gap-10 mobile:flex-col">
            <div className="w-full">
              <label htmlFor="" className="block mb-2 font-medium">
                Ngày muốn thuê
              </label>
              <input type="date" name="loan_date" />
            </div>
            <Input
              label="Chọn số lượng khách"
              name="number_of_customers"
              type="number"
              control={control}
              errors={errors}
            />
          </div>
          <div className="flex justify-between w-full gap-10 mobile:flex-col">
            <div className="w-full">
              <label htmlFor="" className="block mb-2 font-medium">
                Chọn khu vực
              </label>
              <div className="flex gap-x-3">
                <select name="" id="" className="border">
                  <option value="">Hà nội</option>
                  <option value="">TP Hồ Chí Minh</option>
                  <option value="">Bình Định</option>
                  <option value="">Bến Tre</option>
                </select>
                <select name="" id="" className="border">
                  <option value="">Hà nội</option>
                  <option value="">TP Hồ Chí Minh</option>
                  <option value="">Bình Định</option>
                  <option value="">Bến Tre</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="">Ghi chú</label>
              <textarea className="border w-full" rows="6"></textarea>
            </div>
          </div>
          <Button primary className="float-right mt-4">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Cinemas
