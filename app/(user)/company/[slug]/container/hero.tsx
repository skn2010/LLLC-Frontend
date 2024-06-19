import Image from "next/image";
import cn from "@/app/utils/class-names";
import RatingStar from "@/app/components/rating-star";

type Props = {
  className?: string;
};

export default function Hero({ className }: Props) {
  return (
    <section
      style={{ backgroundImage: `url(${"/hero.png"})` }}
      className={cn(
        className,
        "h-[80dvh] lg:h-[50dvh] flex items-end bg-no-repeat bg-cover bg-center"
      )}
    >
      <div className="_app-layout text-white">
        <div className="_container-layout pb-10">
          <h1 className="text-2xl lg:text-4xl font-bold">Dumpling Home</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <RatingStar rating={4} />
            <p className="text-sm font-semibold">4.5 (1,300 reviews)</p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold">
              10:30 Am - 5:30 PM | created in 2024-41-11
            </p>
          </div>

          <div className="mt-6 flex items-center gap-x-4">
            <figure>
              <Image
                src={"/hero.png"}
                alt="profile-img"
                width={80}
                height={80}
                className="w-full max-w-[50px] aspect-[1/1] rounded-full object-cover"
              />
            </figure>
            <div>
              <h4 className="text-sm font-bold text-gray-100">Bishnu Thapa</h4>
              <p className="mt-1 text-xs text-gray-100">Pokhara Kaski</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
