import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url("/home-hero.jpg")` }}
      className="h-[50dvh] lg:h-[72dvh] w-full lg:pt-[80px] flex justify-center items-center bg-no-repeat bg-cover bg-center"
    >
      <div className="_app-layout">
        <h1 className="text-center text-[32px] lg:text-[48px] text-white">
          Crafting Trusted Connections
        </h1>
        <div className="mt-6 flex flex-col items-center gap-y-12 text-white">
          <p className="max-w-[400px] text-center">
            RateCraft helps businesses build trust with genuine reviews,
            empowering informed choices.
          </p>

          <Link href={"/companies"} className="_btn _primary-btn">
            Write a review
          </Link>
        </div>
      </div>
    </section>
  );
}
