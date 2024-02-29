import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function TransactionHistory() {
  const navigate = useNavigate()

  const [selected, setSelected] = useState(1)

  const handleSelected = (e) => {
    setSelected(e)
  }

  return (
    <div>
      <h1 className="uppercase bg-[#222222] text-white py-3 text-center">LỊCH SỬ GIAO DỊCH</h1>

      <div className="flex gap-x-5 mt-6">
        <Button onClick={() => handleSelected(1)} primary={selected === 1}>
          Tên phim
        </Button>
        <Button onClick={() => handleSelected(2)} primary={selected === 2}>
          PHOTOTICKET
        </Button>
        <Button onClick={() => handleSelected(3)} primary={selected === 3}>
          QUẦY ONLINE
        </Button>
        <Button onClick={() => handleSelected(4)} primary={selected === 4}>
          CGV EGIFT
        </Button>
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
