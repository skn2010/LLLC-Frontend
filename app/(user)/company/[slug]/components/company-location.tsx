import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
};

export default function CompanyLocation({ className }: Props) {
  return (
    <div className={cn(className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.144954986101!2d83.98791442619576!3d28.233279675885086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594415fcee6db%3A0xea49186bb677b569!2sNadipur%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1718765122214!5m2!1sen!2snp"
        width="100%"
        height="400px"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}
