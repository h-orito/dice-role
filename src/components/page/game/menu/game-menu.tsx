import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfoCircle,
  faComments,
  faMap,
  faUsers,
  faRunning,
  faUserCog
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
// 大きく表示される対策
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from './game-menu.module.css'

type MenuProps = {
  currentMenu: string
  setCurrentMenu: (menuName: string) => void
}

const GameMenu: React.FC<MenuProps> = (props: MenuProps) => {
  const selectedClass = (menuName: string): string =>
    menuName === props.currentMenu ? styles.selected : ''
  const menus: { name: string; icon: IconDefinition }[] = [
    {
      name: 'Info',
      icon: faInfoCircle
    },
    {
      name: 'Chat',
      icon: faComments
    },
    {
      name: 'Characters',
      icon: faUsers
    },
    {
      name: 'Map',
      icon: faMap
    },
    {
      name: 'Action',
      icon: faRunning
    },
    {
      name: 'Setting',
      icon: faUserCog
    }
  ]
  return (
    <ul className='grid grid-flow-col py-1 px-2 text-center text-gray-500 bg-gray-100 rounded-full'>
      {menus.map((menu) => (
        <li key={menu.name.toLowerCase()}>
          <div
            className={`${styles.menu_button} ${selectedClass(
              menu.name.toLowerCase()
            )}`}
            onClick={() => props.setCurrentMenu(menu.name.toLowerCase())}
          >
            <FontAwesomeIcon icon={menu.icon} className='mt-0.5' />
            <span className='hidden sm:inline-block'>
              &nbsp;&nbsp;{menu.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default GameMenu
