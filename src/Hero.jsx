function Hero() {

  return (

    <section className="hero" id="home">

      {/* Left Content */}

      <div className="hero-content">

        <span className="hero-badge">
          CELEBRATE INDIA
        </span>

        <h1>
          Explore Indian
          <br />
          Festivals
        </h1>

        <p>
          Discover the vibrant culture, traditions and
          celebrations of India through its beautiful festivals.
        </p>

        <div className="hero-buttons">

          <a href="#gujarat" className="explore-btn">
            ▶ Explore Festivals
          </a>

          <a href="#gallery" className="gallery-btn">
            Gallery
          </a>

        </div>

      </div>


      {/* Right Image */}

      <div className="hero-image">

        <img
          src="https://images.openai.com/static-rsc-4/4g2XTRO5Kt-G1JO7PRYAJhix1NW8TM45YdiZhOBKpWuap8dzDy2sFHssJRTkRNdTniYe_mmUF4f5K4Yaqn6rUUBXdiaXIyQsBRCdZJmgBbysD3JYF9DRp-ihrRNz2R6nePOWIQ4Mdgup8hSHoBIuV0Me640ykJPh5ed9XrUWwb1NXdnN6hHp2W9ASkVP9WmC?purpose=fullsize"
          alt="Indian Festivals"
        />

      </div>

    </section>

  );

}

export default Hero;