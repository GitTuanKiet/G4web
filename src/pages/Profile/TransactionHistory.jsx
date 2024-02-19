import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

function TransactionHistory() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">LỊCH SỬ GIAO DỊCH</h1>

      <div className="flex gap-x-5 mt-6">
        <Button primary>Tên phim</Button>
        <Button>PHOTOTICKET</Button>
        <Button>QUẦY ONLINE </Button>
        <Button>CGV EGIFT</Button>
      </div>

      <div className="mt-3">
        <p>Bạn chưa có giao dịch (đơn hàng) nào.</p>
      </div>

      <button className="text-rose-500" onClick={() => navigate(-1)}>
        &lt;&lt; Quay lại
      </button>
    </div>
  )
}
export default TransactionHistory
