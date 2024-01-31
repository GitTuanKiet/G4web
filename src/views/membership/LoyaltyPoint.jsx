
const LoyaltyPoint = () => {
  return (
    <div>
      <h1>CHƯƠNG TRÌNH ĐIỂM THƯỞNG</h1>

      <p>
        Chương trình bao gồm 4 đối tượng thành viên U22 | CGV Member | CGV VIP và CGV VVIP, với những quyền lợi và mức ưu đãi khác nhau.
      </p>

      <p>
        Mỗi khi thực hiện giao dịch tại hệ thống rạp CGV, bạn sẽ nhận được một số điểm thưởng tương ứng với cấp độ thành viên:
      </p>

      <table>
        <thead>
          <tr>
            <th>Điểm thưởng</th>
            <th>U22 | Member</th>
            <th>VIP</th>
            <th>VVIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tại Quầy Vé</td>
            <td>5%</td>
            <td>7%</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Quầy Bắp Nước</td>
            <td>3%</td>
            <td>4%</td>
            <td>5%</td>
          </tr>
        </tbody>
      </table>

      <p>Ví dụ: Với giao dịch mua vé giá 100.000 VND bạn có thể:</p>
      <ul>
        <li>Thanh toán 80.000 VND + 20 điểm thưởng</li>
        <li>Thanh toán với 10.000 VND + 90 điểm thưởng</li>
      </ul>


      <p>Cách làm tròn điểm thưởng:</p>
      <ul>
        <li>Từ 0.1 đến 0.4: làm tròn xuống (Ví dụ: 3.2 điểm sẽ được tích vào tài khoản 3 điểm)</li>
        <li>Từ 0.5 đến 0.9: làm tròn lên (Ví dụ: 3.6 điểm sẽ được tích vào tài khoản 4 điểm)</li>
      </ul>

      <p>Lưu ý:</p>
      <ol>
        <li>1. Điểm thưởng có thời hạn sử dụng là 01 năm.</li>
        <li>2. Điểm thưởng có giá trị sử dụng tại tất cả các rạp CGV trên toàn quốc.</li>
        <li>3. Sau khi dịch vụ được CGV Việt Nam hoàn thành, điểm thưởng sẽ được ghi nhận vào tài khoản của bạn vào 8:00 sáng ngày tiếp theo. Ví dụ: suất chiếu của bạn diễn ra vào ngày 05/01/2024, điểm thưởng sẽ được ghi nhận vào tài khoản của bạn vào 8:00 sáng ngày 06/01/2024.</li>
        <li>4. Bạn có thể dễ dàng kiểm tra điểm thưởng của mình trên CGV Website hoặc Ứng dụng CGV trên điện thoại (Mobile App).</li>
        <li>5. Điểm thưởng tối thiểu được sử dụng cho mỗi giao dịch là 20 điểm trở lên.</li>
        <li>6. Thành viên khi thanh toán trực tuyến trên Website/APP, trong 1 giao dịch, điểm thưởng chỉ được sử dụng thanh toán tối đa 90% giá trị đơn hàng.</li>
        <li>7. Khi thực hiện các giao dịch sử dụng điểm thưởng hoặc vé miễn phí trực tiếp tại rạp, khách hàng vui lòng xuất trình tài khoản thành viên (Thẻ cứng hoặc tài khoản online trên Ứng dụng CGV)
          và Giấy tờ tùy thân hoặc giấy tờ khác có thể hiện ngày tháng năm sinh (Bản gốc hoặc ảnh chụp) cho nhân viên rạp để tiến hành xác thực chính chủ tài khoản thành viên. Nhân viên rạp có quyền từ chối yêu cầu của khách hàng nếu khách hàng không cung cấp được tài khoản thành viên và/hoặc giấy tờ quy định tại đây hoặc các thông tin Khách Hàng cung cấp không trùng khớp với nhau. Việc thực hiện các giao dịch sử dụng điểm thưởng hoặc vé miễn phí trên website của CGV và/hoặc ứng dụng CGV trên điện thoại luôn được mặc định là được sử dụng bởi chính chủ tài khoản thành viên.
          Khách Hàng có nghĩa vụ bảo mật tài khoản Thành Viên của mình. CGV Việt Nam sẽ không giải quyết bất kỳ khiếu nại nào liên quan đến điểm thưởng nếu giao dịch sử dụng điểm thưởng đó được thực hiện trực tuyến.
          CGV Việt Nam sẽ không hoàn và/hoặc giải quyết đối với điểm thưởng đã được sử dụng nếu Khách Hàng không chứng minh được Khách Hàng không phải là người sử dụng điểm thưởng và quyết định của CGV Việt Nam là quyết định cuối cùng.</li>
        <li>8. Khi mua vé online có sử dụng điểm, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập TẠI ĐÂY ).</li>
      </ol>

    </div>
  )
}

export default LoyaltyPoint
