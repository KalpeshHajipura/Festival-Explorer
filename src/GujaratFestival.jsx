function GujaratFestival() {
  return (
     <section className="section" id="gujarat">
      <div className="section-header">
        <h2>Gujarat Festivals</h2>
        <p>Experience the rich and unique festivals of Gujarat</p>
      </div>
      <div className="festival-container">

        <Navratri />

        <Uttarayan />

        <RannUtsav />

      </div>

    </section>
  );
}
function Navratri() {
  return (
    <div className="Festival-card">
      <img
        src="https://images.news18.com/ibnlive/uploads/2023/10/happy-navratri-wishes-messages-quotes-for-shardiya-navratri-2023-10-43f8419f92d495fd15b448fc384c1dea-3x2.jpg"
        alt="Navratri"
      />
      <div className="Festival-info">
        <h3>Navratri 💃</h3>

        <p>A nine-day festival celebrated with Garba and Dandiya.</p>
      </div>
    </div>
  );
}
function Uttarayan() {
  return (
    <div className="Festival-card">
      <img
        src="https://c8.alamy.com/comp/E5YEEP/uttarayan-unique-and-famous-kite-flying-festival-of-gujarat-india-E5YEEP.jpg"
        alt="Uttarayan"
      />

      <div className="Festival-info">
        <h3>Uttarayan 🪁</h3>

        <p>The kite festival of Gujarat, celebrated on 14th January.</p>
      </div>
    </div>
  );
}
function RannUtsav() {

  return (
    <div className="Festival-card">

      <img src="https://assets.cntraveller.in/photos/68870a201a3cc0f3409ae48e/16:9/w_2560%2Cc_limit/GT3.jpg" alt="Rann Utsav" />

      <div>
        <h3>Rann Utsav 🏕️</h3>

        <p>
          A grand cultural festival of Kutch.
        </p>
      </div>

    </div>
  );
}

export default GujaratFestival;
