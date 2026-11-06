export function FestivalAudio() {

  return (

    <div className="media-card">

      <h3>🎵 Festival Audio</h3>

      <audio controls>

        <source
          src="/public/audio/Festival.mp3"
          type="audio/mpeg"
        />

        Your browser does not support audio.

      </audio>

    </div>

  );
}
export function FestivalVideo() {

  return (

    <div className="media-card">

      <h3>🎬 Festival Video</h3>

      <video width="100%" controls>

        <source
          src="/public/Video/FestivalVideo.mp4"
          type="video/mp4"
        />

        Your browser does not support video.

      </video>

    </div>

  );
}
export function FestivalEmojis() {

  return (

    <div className="media-card">

      <h3>😊 Festival Emojis</h3>

      <div className="emoji-container">

        <span>🎊</span>
        <span>🪁</span>
        <span>🎨</span>
        <span>🪔</span>
        <span>🎆</span>
        <span>💃</span>

      </div>

    </div>

  );
}
function FestivalMedia() {

  return (

    <section className="media-section" id="media">

      <h2>Festival Media</h2>

      <p>Listen, watch and feel the festival vibes</p>

      <div className="media-container">

        <FestivalAudio />

        <FestivalVideo />

        <FestivalEmojis />

      </div>

    </section>

  );

}

export default FestivalMedia;