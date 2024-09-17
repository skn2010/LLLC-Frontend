import cn from "@/app/utils/class-names";

type Props = {
  className?: string;
  location: {
    latitude: number | string;
    longitude: number | string;
  };
};

export default function CompanyLocation({ className, location }: Props) {
  const { latitude, longitude } = location;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;

  return (
    <div className={cn(className)}>
      <iframe
        src={googleMapsUrl}
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
