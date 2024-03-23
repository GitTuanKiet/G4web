import Button from 'shared/components/Button'
import Divider from 'shared/components/Divider'

function Home() {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <h1>Quản lí phim</h1>
        <Button to="/admin/manage/movies/create">Thêm mới phim</Button>
      </div>
      <Divider />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                Tiêu đề
              </th>
              <th scope="col" className="px-6 py-3">
                Thời lượng
              </th>
              <th scope="col" className="px-6 py-3">
                Ngôn ngữ
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày khởi chiếu
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày dừng chiếu
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="">Thao tác</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b 800 700">
              <td className="px-6 py-4">1</td>

              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Kungfuuu panda
              </th>
              <td className="px-6 py-4">84 phút</td>
              <td className="px-6 py-4">Anh</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4 text space-x-2">
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Thêm
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Sửa
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Xóa
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b 800 700">
              <td className="px-6 py-4">1</td>

              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Kungfuuu panda
              </th>
              <td className="px-6 py-4">84 phút</td>
              <td className="px-6 py-4">Anh</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4 text space-x-2">
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Thêm
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Sửa
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Xóa
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b 800 700">
              <td className="px-6 py-4">1</td>

              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Kungfuuu panda
              </th>
              <td className="px-6 py-4">84 phút</td>
              <td className="px-6 py-4">Anh</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4 text space-x-2">
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Xem chi tiết
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Sửa
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Xóa
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b 800 700">
              <td className="px-6 py-4">1</td>

              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Kungfuuu panda
              </th>
              <td className="px-6 py-4">84 phút</td>
              <td className="px-6 py-4">Anh</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4">2003-33-22</td>
              <td className="px-6 py-4 text space-x-2">
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Thêm
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Sửa
                </a>
                <a href="#" className="font-medium text-blue-600 500 hover:underline">
                  Xóa
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
