import Banner from 'client/views/Banner'

import RecruitmentSrc from 'assets/images/recruitment.png'

const slides = [
  {
    _id: 1,
    src: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/career/cgv-outing-2.jpg',
    alt: 'Slide 1',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-giftcard-tet24/'
  },
  {
    _id: 2,
    src: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/web/THT_2724.png',
    alt: 'Slide 2',
    link: 'https://www.cgv.vn/default/afag.html'
  },
  {
    _id: 3,
    src: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/web/z4410924643120_ad97087d62f2128232ea4fe89883838b.png',
    alt: 'Slide 3',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-giftcard-tet2024/'
  },
  {
    _id: 4,
    src: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/career/cgv-football.jpg',
    alt: 'Slide 4',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-dragon-combo/'
  },
  {
    _id: 5,
    src: 'https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/career/cgv-outing.jpg',
    alt: 'Slide 5',
    link: 'https://www.cgv.vn/default/newsoffer/cgv-nhan-lich/'
  }
]

function Recruitment() {
  return (
    <div className="bg-[#fdfcf0] ">
      <div className="w-full h-[auto] flex items-center justify-center  my-10">
        <Banner slides={slides} />
      </div>
      <div className="my-4 p-6">
        <h2 className="my-2 text-center font-bold text-3xl text-primary">ĐỒNG HÀNH CÙNG CJ CGV VIỆT NAM</h2>
        <p>
          CJ CGV trực thuộc CJ Group, một trong những tập đoàn kinh tế đa ngành lớn nhất Hàn Quốc. CJ CGV nằm trong
          trong top 05 cụm rạp chiếu phim lớn nhất toàn cầu và là nhà phát hành, cụm rạp chiếu phim lớn nhất tại Việt
          Nam.
        </p>
        <h2 className="text-lg font-bold my-2">Lịch sử phát triển</h2>
        <div>
          <div className="flex jusitfy-between border-b border-black pb-2">
            <span className="font-bold w-[20%]">2005</span>
            <span>Công ty TNHH Truyền thông Megastar (tiền thân của Công ty TNHH CJ CGV Việt Nam) được thành lập.</span>
          </div>
          <div className="flex jusitfy-between ">
            <span className="font-bold w-[20%]">2014</span>
            <span>
              Công ty TNHH Truyền thông MegaStar đổi tên thành Công ty TNHH CJ CGV Việt Nam. Các cụm rạp chiếu phim
              Megastar chính thức chuyển đổi thương hiệu thành CGV Cinemas.
            </span>
          </div>
        </div>
        <p>
          Cùng với việc phát triển các giá trị cốt lõi về nuôi dưỡng nhân tài hàng đầu, kiến tạo văn hóa cương nhu để
          trở thành doanh nghiệp phong cách sống toàn cầu. CJ CGV Việt Nam mong muốn mang đến nhiều cơ hội việc làm cho
          các tài năng trẻ, năng động và yêu thích ngành công nghiệp điện ảnh. <br />
          Chúng tôi chào đón bạn gia nhập đại gia đình CJ CGV Việt Nam thông qua các cơ hội nghề nghiệp cho cả khối văn
          phòng và khối cụm rạp:
        </p>

        <img src={RecruitmentSrc} alt="Recruitment" className="" />

        <div className="grid grid-cols-2 gap-10 px-8 mobile:grid-cols-none  ">
          <div>
            <h2 className="font-bold text-primary text-2xl text-center my-2">VỊ TRÍ TOÀN THỜI GIAN</h2>
            <div className="p-4 bg-[#f0eedc] rounded-3xl border-[#bcb890] border-2">
              <div>
                <h2 className="font-bold text-lg text-center">Khối Văn Phòng/ Cụm Rạp</h2>
                <div>
                  <p>
                    <b>Cách 1</b>: Gửi CV đến email <b>cgvtalent@cj.net</b> với tiêu đề{' '}
                    <b>&quot;[HỌ TÊN] - Ứng tuyển [VỊ TRÍ]&rdquo;</b>.
                  </p>
                  <p>
                    <b>Cách 2:</b> Nộp hồ sơ trực tiếp trên các trang tuyển dụng uy tín mà CGV có đăng tuyển như
                    Linkedin, Vietnamwork, Careerbuilder, Hoteljob, Vieclam24, TopCV ….
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-primary text-2xl text-center my-2"> VỊ TRÍ BÁN THỜI GIAN </h2>
            <div className="p-4 bg-[#f0eedc] rounded-3xl border-[#bcb890] border-2">
              <div>
                <h2 className="font-bold text-lg text-center">Khối Cụm Rạp</h2>
                <div>
                  <p>
                    <b>Cách 1</b>:Nộp hồ sơ trực tiếp tại quầy Guest Service của cụm rạp CGV mà bạn muốn ứng tuyển.
                  </p>
                  <p>
                    <b>Cách 2:</b> Theo dõi thông tin tuyển dụng trên Facebook - CJ CGV Careers.
                  </p>
                  <p>
                    <i>
                      <b>*Đối tượng:</b>
                    </i>{' '}
                    dành cho sinh viên
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold">Lưu ý</h3>
        <ul className="list-disc pl-4">
          <li> CJ CGV KHÔNG thu bất kỳ chi phí tuyển dụng nào dưới mọi hình thức (phí hồ sơ, đồng phục….).</li>
          <li> Với những vị trí cho khối Cụm Rạp, CJ CGV KHÔNG tuyển nhân viên thông qua đơn vị khác.</li>
          <li>
            {' '}
            Việc ứng viên nộp hồ sơ xin việc tại công ty TNHH CJ CGV Việt Nam đồng nghĩa với việc ứng viên đồng ý cho
            công ty TNHH CJ CGV Việt Nam thu thập, sử dụng và/hoặc xử lý dữ liệu cá nhân thể hiện trong hồ sơ xin việc
            để phục vụ cho việc xác minh danh tính & công tác tuyển dụng, làm việc tại công ty TNHH CJ CGV Việt Nam.
            Anh/Chị có thể tham khảo Quy đinh về việc bảo vệ dữ liệu cá nhân đối với ứng viên
            <a
              href="https://www.cgv.vn/default/quy-dinh-ve-bao-ve-du-lieu-ca-nhan-doi-voi-ung-vien"
              className="text-primary"
            >
              {' '}
              tại đây.
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Recruitment
