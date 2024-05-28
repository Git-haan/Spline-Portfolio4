import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
    return (
        <section id="about" className="pb-20">
            <p className="max-w-5xl mx-auto py-10 pl-4 text-lg"> — ABOUT </p>
            <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        className={item.className}
                        img={item.img}
                    />
                ))}

            </BentoGrid>
        </section>
    );
}

export default Grid;