import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function AboutCompany({ className }: Props) {
  return (
    <section className={cn(className, "")}>
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        About us
      </h3>
      <p className="mt-4 text-md text-gray-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </p>
    </section>
  );
}
