import cn from "@/app/utils/class-names";

type Props = { className?: string; children: React.ReactNode };

export default function ContainerLayout({ className, children }: Props) {
  return <div className={cn(className, "_container-layout")}>{children}</div>;
}
