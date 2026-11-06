// Single Image Component
export function SingleImage() {
  return (
    <div className="single-image">

      <h3>Single Festival Image</h3>

      <img
        src="https://img.magnific.com/free-vector/gradient-background-diwali-festival-celebration_52683-142488.jpg"
        alt="Diwali Festival"
        width="350"
        height="220"
        style={{
          border: "5px solid orange",
          borderRadius: "15px"
        }}
      />

    </div>
  );
}


// Multiple Images Component
export function MultipleImages() {

  return (
    <div className="multiple-images">

      <h3>Multiple Festival Images</h3>

      <marquee direction="left" scrollamount="5">

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23OTSuzPl7ypRhDFidKizb9d73L8vW1L9VcLOEy1MS7KehyNWMpkPInM&s=10" alt="Navratri" />

        <img src="https://img.magnific.com/free-photo/young-people-getting-their-kite-up_23-2149233218.jpg?semt=ais_hybrid&w=740&q=80" alt="Uttarayan" />

        <img src="https://img.magnific.com/free-vector/gradient-background-diwali-festival-celebration_52683-142488.jpg" alt="Diwali" />

        <img src="https://m.media-amazon.com/images/I/71lUyyVBB9L._AC_UF1000,1000_QL80_.jpg" alt="Holi" />

        <img src="https://www.rannutsav.com/blog/wp-content/uploads/2023/08/Blog-Header-12-1024x675-1.jpg" alt="Rann Utsav" />

      </marquee>

    </div>
  );
}


// Main Festival Gallery Component
function FestivalGallery() {

  return (
    <section className="gallery-section" id="gallery">

      <h2>Festival Gallery</h2>

      <p>A glimpse of colorful celebrations</p>

      <SingleImage />

      <MultipleImages />

    </section>
  );
}

export default FestivalGallery;