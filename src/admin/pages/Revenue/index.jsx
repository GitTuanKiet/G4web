import { useEffect, useState } from 'react'
import AdminApi from 'apis/adminApi'

function Revenue() {
  const [report, setReport] = useState(null)

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await AdminApi.reportOrders()
        setReport(response.data)
      } catch (error) {
        console.error('Failed to fetch report:', error)
      }
    }

    fetchReport()
  }, [])

  return (
    <div>
      <h1>Revenue</h1>
      {report ? (
        <div>
          <p>Total Orders: {report.totalOrders}</p>
          <p>Total Revenue: {report.totalRevenue}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Revenue
