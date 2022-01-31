import { NextPage } from 'next'
import NavBar from './navbar'
import Footer from './footer'

const Layout: NextPage = ({ children }) => {
  return (
    <div className='w-full'>
      <NavBar />
      <main className='p-5'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
