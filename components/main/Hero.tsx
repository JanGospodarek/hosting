const Hero = () => {
  return (
    <div className="hero   min-h-screen">
      <div className="hero-content text-center flex flex-col">
        <h1 className="text-6xl font-bold">
          Stórzmy stronę internetową <br /> dla
          <span className="text-secondary"> Twojej</span> firmy
        </h1>
        <a className="btn btn-primary btn-outline" href="#benefits">
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};
export default Hero;
