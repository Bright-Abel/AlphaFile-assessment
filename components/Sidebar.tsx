"use client"
import clsx from 'clsx';
import sidebarData from '@/constant/data-json';
import Image from 'next/image';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import ThemeToggle from './ThemeToggle';
import User from './User';
import {useState} from 'react'

interface SidebarProps {
  isSidebarOpen: boolean;
  handleClick: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleClick }) => {
  const [isActive, setIsActive] = useState('home')
  return (
    <aside
      className={clsx(
        ` bg-white dark:bg-dark-300 absolute md:relative top-0 bottom-0 z-50 md:z-0 h-screen max-h-screen dark:border-dark-300 !border-r p-2 border-0 border-solid border-[#F1F5F9] min-h-screen transition-all ease-in-out  duration-200`,
        isSidebarOpen
          ? 'md:ml-0 md:w-[240px] -ml-[240px]'
          : 'md:w-[64px] w-full md:ml-0'
      )}
    >
      <div className={clsx('w-full p-2 flex items-center justify-between ')}>
        <div className="hidden md:block">
        {isSidebarOpen ? (
          <Image
            src="/assets/full.jpg"
            alt="full_sidebar"
            height={32}
            width={64}
            className="h-[32px] w-[64px] object-cover"
          />
        ) : (
          <Image
            src="/assets/col.jpg"
            alt="full_sidebar"
            height={32}
            width={32}
            className="h-[32px] w-[32px] object-cover"
          />
        )}
        </div>

        <Image
            src="/assets/full.jpg"
            alt="full_sidebar"
            height={32}
            width={64}
            className="h-[32px] w-[64px] md:hidden block object-cover"
          />

        <span
          onClick={handleClick}
          className="h-8 w-8 rounded-full bg-white  md:hidden dark:bg-[#ADA9BB] text-[#484554] border border-solid border-[#E2E8F0] hover:bg-[#ADA9BB] hover:dark:bg-[#E2E8F0]] text-lg duration-500 cursor-pointer dark:border-[#484554] flex items-center justify-center"
        >
          x
        </span>
      </div>

      <ul>
        {sidebarData.map((item) => {
          const { id, title, icon } = item;
          const active = isActive === title

          return (
            <li
              key={id}
              onClick={() => setIsActive(title)}
              className={clsx(
                'p-2 rounded-[2px] text-sm text-[#334155] dark:text-white hover:bg-select-100  duration-400 flex items-center hover:text-blue-100 hover:dark:bg-blue-100 hover:dark:text-select-100 group',
                isSidebarOpen
                  ? 'justify-between'
                  : 'justify-between md:justify-center',
                active &&
                  '!text-blue-100 dark:bg-blue-100 dark:!text-select-100 bg-select-100 '
              )}
            >
              <a
                href=""
                className={clsx(
                  `flex gap-4 items-center capitalize`,
                  !isSidebarOpen && 'justify-center'
                )}
              >
                <div
                  className={clsx(
                    'text-[#ADA9BB] text-lg relative group-hover:text-inherit',
                    active &&
                      '!text-blue-100 dark:bg-blue-100 dark:!text-select-100 bg-select-100 '
                  )}
                >
                  {' '}
                  <span>{icon}</span>{' '}
                  {!isSidebarOpen && title.includes('notifications') && (
                    <div className="absolute hidden md:block top-0 right-0 h-2 w-2 rounded-full bg-red-100" />
                  )}{' '}
                </div>
                <p
                  className={clsx(
                    ``,
                    isSidebarOpen ? 'block' : 'block md:hidden'
                  )}
                >
                  {title}
                </p>
              </a>
              {title.includes('notifications') && isSidebarOpen && (
                <div className="h-6 w-6 rounded-full text-xs flex justify-center items-center bg-red-100 text-white">
                  3
                </div>
              )}
              {title.includes('notifications') && !isSidebarOpen && (
                <div className="h-6 w-6 rounded-full text-xs flex justify-center md:hidden items-center bg-red-100 text-white">
                  3
                </div>
              )}
            </li>
          );
        })}

        <button
          type="button"
          onClick={handleClick}
          className={clsx(
            'w-full p-2 rounded-[2px] text-sm text-[#334155] hover:bg-select-100 dark:text-white hover:text-blue-100 hover:dark:bg-blue-100 hover:dark:text-select-100 duration-400 flex items-center gap-4 group',
            !isSidebarOpen && 'justify-normal md:justify-center'
          )}
        >
          {isSidebarOpen ? (
            <MdKeyboardDoubleArrowLeft className="text-[#ADA9BB] text-lg group-hover:text-inherit" />
          ) : (
            <MdKeyboardDoubleArrowRight className="text-[#ADA9BB] text-lg group-hover:text-inherit" />
          )}
          <p className={isSidebarOpen ? 'block' : 'block md:hidden'}>Collapse</p>
        </button>

        <ThemeToggle isSidebarOpen={isSidebarOpen} />
        <User isSidebarOpen={isSidebarOpen} />
      </ul>
    </aside>
  );
};
export default Sidebar;
