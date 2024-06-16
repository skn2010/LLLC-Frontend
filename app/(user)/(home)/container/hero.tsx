import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${hero.src})` }}
      className="h-[50dvh] lg:h-[72dvh] w-full lg:pt-[80px] flex justify-center items-center bg-no-repeat bg-cover bg-center"
    >
      <div className="_app-layout">
        <h1 className="text-center text-[32px] lg:text-[48px] text-white">
          Hello Programmer!!!
        </h1>
        <div className="mt-6 flex flex-col items-center gap-y-12 text-white">
          <p className="max-w-[200px] text-center">hello world i am fine too</p>

          <button className="_btn _primary-btn">Write a review</button>
        </div>
      </div>
    </section>
  );
}
