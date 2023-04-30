import "../styles/globals.css";

const Spotify = () => {
  return (
    <div className="spotify-container mt-10 w-96">
      <iframe
        src="https://open.spotify.com/embed/artist/2heJl7jzvTYoHyR5xwSSea?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
