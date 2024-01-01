import NavContent from "./NavContent";

const NavBar = () => {
  return (
    <nav className="border-b bg-white dark:bg-zinc-950 dark:border-zinc-800 sticky top-0 z-50">
      <div className="flex justify-between items-center dark:bg-zinc-950 p-4 max-w-[1200px] m-auto">
        <div className="title bg-zinc-200 dark:bg-zinc-900 w-[50px] h-[50px] rounded-full grid place-items-center font-[700]">
          UK
        </div>
        <NavContent />
      </div>
    </nav>
  );
};

export default NavBar;
