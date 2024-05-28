import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  img,
}: {
  className?: string;
  id?: number;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white border border-black/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="w-full h-full absolute">
        { img && (
          <img src={img} alt={img} className="object-cover object-center"/>
        )}
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200 relative min-h-48 flex flex-col px-5 p-5 lg:p-10">
        {id === 1 && (
          <a 
          href="https://pixel-portfolio-five.vercel.app/" 
          className="bg-slate-100 hover:bg-slate-300 py-2 px-4 rounded-lg text-center font-semibold max-w-32">
            Play Game
          </a>
        )}

        {id === 2 && (
          <div>
            <h1 className="text-xl font-semibold">Hi, I&apos;m Ishaan. A UI/UX and Full-Stack Developer passionate about AI and Design.</h1>
            <button className="bg-black hover:bg-slate-400 text-slate-100 py-2 px-4 mt-10 rounded-lg text-center font-semibold max-w-32">
              <a href="https://github.com/Git-haan" type="text/html">
                Learn More
              </a>
            </button>
          </div>
          )}
      
        {id === 4 && (
          <div className="flex gap-3 md:gap-6 w-fit">
            <div className="flex flex-col gap-3 md:gap-5">
              {["Python", "Flask", "Django"].map((item) => (
                <span key={item} className="py-2 md:py-6 md:px-5 px-3 text-xs md:text-base font-semibold opacity-50 lg:opacity-100 rounded-lg text-center bg-gray-100">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-slate-100"/>
            </div>
            
            <div className="flex flex-col gap-3 md:gap-5 ">
              {["React", "Next.js"].map((item) => (
                <span key={item} className="py-2 md:py-6 md:px-5 px-3 text-xs md:text-base font-semibold opacity-50 lg:opacity-100 rounded-lg text-center bg-gray-100">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-slate-100"/>
              <span className="py-2 md:py-6 md:px-5 px-3 text-xs md:text-base font-semibold opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-100">
                Tailwind CSS
              </span>
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
            <span className="py-4 px-3 rounded-lg text-center bg-slate-100"/>
            <span className="py-2 md:py-6 md:px-5 px-3 text-xs md:text-base font-black opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-100">
                Tech Stack
              </span>
              {["HTML", "CSS"].map((item) => (
                <span key={item} className="py-2 md:py-6 md:px-5 px-3 text-xs md:text-base font-semibold opacity-50 lg:opacity-100 rounded-lg text-center bg-gray-100">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              {["Java", "JavaScript", "TypeScript"].map((item) => (
                <span key={item} className="py-2 md:py-6 md:px-5 px-3 text-xs md:text-base font-semibold opacity-50 lg:opacity-100 rounded-lg text-center bg-gray-100">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-slate-100"/>
            </div>
          
          </div>
        )}
            
      </div>
    </div>
  );
};
