import cn from "@/app/utils/class-names";

type Props = { className?: string; children: React.ReactNode };

export default function AppLayout({ className, children }: Props) {
  return <main className={cn(className, "_app-layout")}>{children}</main>;
}
