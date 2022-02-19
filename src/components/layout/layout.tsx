import { NextPage } from 'next'
import NavBar from './navbar'
import Footer from './footer'

const Layout: NextPage = ({ children }) => {
  return (
    <div className='w-full text-center'>
      <NavBar />
      <main className='py-5 px-2 sm:px-5'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
