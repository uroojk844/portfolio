"use client";

const Button = ({ isActive, children }) => {
  return (
    <button
      className={`${
        isActive && "bg-zinc-200 dark:bg-zinc-900"
      } hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200 py-2 px-4 rounded text-sm font-[600]`}
    >
      {children}
    </button>
  );
};

export default Button;
