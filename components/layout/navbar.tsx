import type { NextPage } from 'next'
import { SystemConst } from '../const'

const NavBar: NextPage = () => {
  return (
    <nav className='flex p-5 w-full bg-slate-200 border-b border-slate-400'>
      <h1>{SystemConst.APPLICATION_NAME}</h1>
    </nav>
  )
}

export default NavBar
