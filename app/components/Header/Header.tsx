import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  return (
    <div className="p-6 md:p-12 flex flex-wrap md:flex-nowrap justify-between items-center text-main-header-light dark:text-main-header-dark">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold relative after:block after:w-full sm:after:w-50 after:h-[6px] after:bg-primary-light after:mt-2 after:rounded">
        User Persona
      </div>

      <div className="mt-4 md:mt-0">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
