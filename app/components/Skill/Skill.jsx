import Image from "next/image";

const Skill = ({ skill }) => {
  return (
    <div className="border dark:border-zinc-800 hover:bg-zinc-100 transition-colors duration-200 cursor-pointer dark:hover:bg-zinc-900/50 rounded-md p-4 flex gap-4">
      <div className="bg-zinc-900 w-[60px] h-[60px] grid place-items-center rounded-full">
        <Image width={36} height={36} src={skill.icon} alt="icon" />
      </div>
      <div className="flex-1 grid content-center gap-2">
        <div className="text font-[500]">{skill.name}</div>
        <div className="border dark:border-zinc-800 rounded-md h-[10px] bg-zinc-100 dark:bg-zinc-900">
          <div
            className={`bg-zinc-300 h-full rounded`}
            style={{ width: `${skill?.rating}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
