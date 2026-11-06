function NationalFestival() {
  return (
     <section className="section" id="national">
      <div className="section-header">
        <h2>National Festivals</h2>
        <p>Experience the vibrant and diverse festivals of India</p>
      </div>
      <div className="festival-container">

        <Diwali />

        <Holi />

        <RepublicDay />

        <DurgaPuja />

      </div>

    </section>
  );
}
function Diwali() {
  return (
    <div className="Festival-card">

      <img
        src="https://thumbs.dreamstime.com/b/happy-diwali-diwali-celebration-diya-lamps-fireworks-al-generated-image-happy-diwali-diwali-celebration-diya-lamps-360976100.jpg"
        alt="Diwali"
      />

      <div className="Festival-info">
        <h3>Diwali 🪔</h3>
        <p>
          The festival of lights and victory of good over evil.
        </p>
      </div>

    </div>
  );
}

// Holi Card
function Holi() {
  return (
    <div className="Festival-card">

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H0FSIGGOw7N9_7Y6er5LgPj6POGg9I1hzmMVFgke-A&s"
        alt="Holi"
      />

      <div className="Festival-info">
        <h3>Holi 🎨</h3>
        <p>
          The festival of colors, symbolizing joy and unity.
        </p>
      </div>

    </div>
  );
}

// Republic Day Card
function RepublicDay() {
  return (
    <div className="Festival-card">

      <img
        src="https://images.news18.com/ibnlive/uploads/2023/01/republic-day-2.jpg"
        alt="Republic Day"
      />

      <div className="Festival-info">
        <h3>Republic Day 🇮🇳</h3>
        <p>
          Celebrated on 26th January to honor the Indian Constitution.
        </p>
      </div>

    </div>
  );
}

// Durga Puja Card
function DurgaPuja() {
  return (
    <div className="Festival-card">

      <img
        src="https://media.istockphoto.com/id/1044388000/photo/priest-worshipping-goddess-durga-durga-puja-festival-celebration.jpg?s=612x612&w=0&k=20&c=ZNjOXd3OlItDgIPnU7rHJfcH-r33Q0dEzOknQLIMnlw="
        alt="Durga Puja"
      />

      <div className="Festival-info">
        <h3>Durga Puja 🛕</h3>
        <p>
          A major festival celebrating the power of Goddess Durga.
        </p>
      </div>

    </div>
  );
}
export default NationalFestival;