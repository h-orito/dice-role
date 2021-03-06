import type { NextPage } from 'next'
import { SystemConst } from 'components/const'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <nav className='p-5 w-full bg-slate-200 border-b border-slate-200'>
      <h1>
        <Link href='/'>{SystemConst.APPLICATION_NAME}</Link>
      </h1>
    </nav>
  )
}

export default NavBar
