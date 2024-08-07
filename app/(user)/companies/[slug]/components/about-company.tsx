import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
  companyDescription: string;
};

export default function AboutCompany({ companyDescription, className }: Props) {
  return (
    <section className={cn(className, "")}>
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
        About us
      </h3>
      <p className="mt-4 text-md text-gray-700">{companyDescription}</p>
    </section>
  );
}
