const About = () => {
  return (
    <div className="mb-10">
      <h1 className="text-primary text-2xl"></h1>
      <div>
        <div className="mobile:w-[100px]">
          <iframe
            // width="400"
            height="315"
            className="mobile:w-[340px] desktop:w-full desktop:h-[500px]"
            src="https://www.youtube.com/embed/e1ZSLVTZ47M?si=LAqNZ-q0KM5FFTIX"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="my-10">
          <p>
            CGV là một trong năm Cụm Rạp Chiếu Phim lớn nhất toàn cầu và CGV Việt Nam là Nhà Phát Hành, nhà quản lý và
            vận hành Cụm Rạp Chiếu Phim CGV Cinemas lớn nhất tại Việt Nam. Mục tiêu của CGV Việt Nam là trở thành công
            ty giải trí điển hình, đóng góp cho sự phát triển không ngừng của lĩnh vực điện ảnh Việt Nam nói riêng và
            công nghiệp văn hóa mang đậm bản sắc Việt Nam nói chung
          </p>
          <p>
            CGV Việt Nam hội nhập, hài hòa và góp phần tạo nên khái niệm độc đáo về việc chuyển đổi cụm rạp chiếu phim
            truyền thống thành tổ hợp văn hóa “Cultureplex”, nơi khán giả không chỉ đến để thưởng thức điện ảnh đa dạng
            thông qua các công nghệ tiên tiến như SCREENX, IMAX, STARIUM, 4DX, Dolby Atmos, mà còn để thưởng thức ẩm
            thực hoàn toàn mới và khác biệt với các trải nghiệm dịch vụ chất lượng nhất tại Cụm Rạp Chiếu Phim CGV
            Cinemas.
          </p>
          <p>
            CGV Việt Nam hướng sự quan tâm đến phát triển nội tại của công nghiệp văn hóa tại Việt Nam, đồng hành cùng
            điện ảnh nước nhà. Thông qua những nỗ lực trong việc xây dựng chương trình Nhà biên kịch tài năng, Dự án
            phim ngắn CJ, Lớp học làm phim TOTO, CGV ArtHouse, phối hợp Học Viện Điện Ảnh Hàn Quốc (KAFA) tổ chức Khóa
            đào tạo cho các đạo diễn xuất sắc của Dự án phim ngắn CJ, CGV Việt Nam mong muốn sẽ đồng hành và hỗ trợ phát
            triển cho các nhà làm phim trẻ tài năng của Việt Nam. Ngoài ra, bằng những nỗ lực của doanh nghiệp, CGV Việt
            Nam đã và đang phối hợp với các bên liên quan nhằm đưa các tác phẩm điện ảnh có nội hàm và đậm bản sắc Việt
            Nam tham gia các Liên Hoan Phim Quốc tế uy tín; tài trợ cho các hoạt động Liên Hoan Phim uy tín tổ chức tại
            Việt Nam như Liên Hoan Phim Quốc tế Hà Nội, Liên Hoan Phim Việt Nam,…
          </p>
          <p>
            CGV Việt Nam trên hành trình mang điện ảnh đến mọi miền Tổ quốc, cũng tập trung đến đối tượng khán giả ở các
            khu vực ít có điều kiện tiếp cận với điện ảnh, bằng cách tạo cơ hội để người dân địa phương có thể thưởng
            thức những tác phẩm điện ảnh chất lượng thông qua các chương trình vì cộng đồng như Trăng cười và Điện ảnh
            cho mọi người.
          </p>
          <p>
            CGV Việt Nam cam kết nỗ lực, tiếp tục cuộc hành trình bền bỉ trong việc góp phần xây dựng một nền công
            nghiệp điện ảnh Việt Nam ngày càng vững mạnh cùng các khách hàng tiềm năng, các nhà làm phim, các đối tác
            kinh doanh uy tín, và cùng toàn thể xã hội.
          </p>
          <div className="grid grid-cols-3 gap-10 mt-10 mobile:grid-cols-none text-center">
            <img
              src="https://www.cgv.vn/media/wysiwyg/about-1.jpg"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
            <img
              src="https://www.cgv.vn/media/wysiwyg/about-2.PNG"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />

            <img
              src="https://www.cgv.vn/media/wysiwyg/about-2.PNG"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
            <img
              src="https://www.cgv.vn/media/wysiwyg/about-2.PNG"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
            <img
              src="https://www.cgv.vn/media/wysiwyg/about-2.PNG"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
            <img
              src="https://www.cgv.vn/media/wysiwyg/about-2.PNG"
              alt=""
              className="w-[300px] h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
