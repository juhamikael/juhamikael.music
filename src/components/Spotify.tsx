import "../styles/globals.css";

const Spotify = () => {
  return (
    <>
      <div className="mt-10 text-3xl">Spotify</div>
      <div className="spotify-container my-2 w-80">
        <iframe
          className="h-[80vh]"
          src="https://open.spotify.com/embed/artist/2heJl7jzvTYoHyR5xwSSea?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Spotify;
