import Image from 'next/image';
import clsx from 'clsx';

const User = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div className={clsx('flex items-center gap-2 p-2')}>
      <Image
        src="/assets/avatar.svg"
        width={32}
        height={32}
        alt="person"
        className="w-8 h-8 object-cover"
      />
      <div className={clsx(!isSidebarOpen &&' hidden')}>
        <h5 className="text-xs text-[#334155] dark:text-white">Rudra Devi</h5>
        <p className="text-[#64748B] text-xs dark:text-white">
          rudra.devi@gmail.com
        </p>
      </div>
    </div>
  );
};
export default User;
