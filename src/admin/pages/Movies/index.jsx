import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminApi from 'apis/adminApi'
import Button from 'shared/components/Button'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await AdminApi.getMovies()
        setMovies(response.data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  const handleDelete = async (movieId) => {
    try {
      await AdminApi.deleteMovie(movieId)
      setMovies(movies.filter((movie) => movie._id !== movieId))
    } catch (error) {
      console.error('Error deleting movie:', error)
    }
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-medium">Danh sách phim</h1>
      <div className="flex justify-end mb-4">
        <Button primary to="/admin/movies/add">
          Thêm phim
        </Button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Tiêu đề</th>
            <th className="py-2">Độ tuổi</th>
            <th className="py-2">Thời lượng</th>
            <th className="py-2">Ngôn ngữ</th>
            <th className="py-2">Ngày khởi chiếu</th>
            <th className="py-2">Ngày kết thúc</th>
            <th className="py-2">Thể loại</th>
            <th className="py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td className="py-2">{movie.title}</td>
              <td className="py-2">{movie.age_range}</td>
              <td className="py-2">{movie.duration}</td>
              <td className="py-2">{movie.language}</td>
              <td className="py-2">{movie.premiere_date}</td>
              <td className="py-2">{movie.end_date}</td>
              <td className="py-2">{movie.genres.join(', ')}</td>
              <td className="py-2">
                <Link to={`/admin/movies/edit/${movie._id}`} className="text-blue-500 hover:underline">
                  Sửa
                </Link>
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="text-red-500 hover:underline ml-2"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Movies
