
// project imports
// import Header from '.../layouts/MainLayout/header.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from '../../views/home/Banner.jsx'
// import Container from 'containers'

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <>
      <Header />
      <div className='flex items-center justify-center'>
         <Content />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
