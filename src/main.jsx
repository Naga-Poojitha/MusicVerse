import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search,
  Play,
  Heart,
  Music2,
  Calendar,
  ArrowRight,
  Menu,
  X,
  ExternalLink
} from "lucide-react";

import "./styles.css";

// =========================
// ARTISTS
// =========================

const artists = [
  {
    name: "Anirudh Ravichander",
    role: "Music Director",
    genre: "Mass • Melodic",
    image:
      "https://i.pinimg.com/736x/dd/c9/ab/ddc9ab7eb0f6ce83d3bf6f61e1ac09b2.jpg"
  },
  {
    name: "Thaman S",
    role: "Music Director",
    genre: "Mass • Electronic",
    image:
      "https://th.bing.com/th/id/OIP.JUhp_hUsyovzQsaIzqpl2wHaFj?w=220&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Sid Sriram",
    role: "Playback Singer",
    genre: "Melody • Soul",
    image:
      "https://www.bing.com/th/id/OIP.66fTOtiKUfImfoX-Ytu7HQHaEY?w=266&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgMagVNext&rm=2"
  },
  {
    name: "Devi Sri Prasad",
    role: "Music Director",
    genre: "Mass • Folk",
    image:
      "https://i.pinimg.com/originals/22/86/1b/22861b12e70936039397467a8d916f20.jpg"
  }
];

// =========================
// SONGS
// =========================

const songs = [
  {
    title: "Samajavaragamana",
    artist: "Sid Sriram",
    movie: "Ala Vaikunthapurramuloo",
    duration: "3:52",
    spotify:
      "https://open.spotify.com/search/Samajavaragamana%20Sid%20Sriram"
  },
  {
    title: "Kurchi Madathapetti",
    artist: "Thaman S",
    movie: "Guntur Kaaram",
    duration: "3:36",
    spotify:
      "https://open.spotify.com/search/Kurchi%20Madathapetti%20Thaman"
  },
  {
    title: "Daavudi",
    artist: "Anirudh Ravichander",
    movie: "Devara",
    duration: "4:12",
    spotify:
      "https://open.spotify.com/search/Daavudi%20Anirudh%20Ravichander"
  },
  {
    title: "Srivalli",
    artist: "Devi Sri Prasad",
    movie: "Pushpa",
    duration: "3:44",
    spotify:
      "https://open.spotify.com/search/Srivalli%20Devi%20Sri%20Prasad"
  }
];

// =========================
// UPCOMING EVENTS
// =========================

const events = [
  {
    date: "30",
    month: "OCT",
    title: "Ram Miriyala Live",
    location: "Hyderabad",
    url:
      "https://in.bookmyshow.com/events/ram-miriyala-live-at-urban-mayabazar-oct-30/ET00520083/"
  },
  {
    date: "24",
    month: "OCT",
    title: "Telugu Jamming Sessions",
    location: "Hyderabad",
    url:
      "https://in.bookmyshow.com/events/telugu-jamming-sessions-by-bangaru-kodi-petta-jams/ET00520554"
  },
  {
    date: "10",
    month: "OCT",
    title: "Kasyap ft. Vinuthna Live",
    location: "Hyderabad",
    url:
      "https://in.bookmyshow.com/events/kasyap-ft-vinuthna-first-ever-live-performance/ET00518032"
  }
];

// =========================
// APP
// =========================

function App() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);

  // =========================
  // SEARCH
  // =========================

  const filteredArtists = artists.filter((artist) =>
    `${artist.name} ${artist.role} ${artist.genre}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filteredSongs = songs.filter((song) =>
    `${song.title} ${song.artist} ${song.movie}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // =========================
  // FAVORITES
  // =========================

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  // =========================
  // PLAY SONG
  // =========================

  const playSong = (song) => {
    setCurrentSong(song);
    setPlaying(true);

    // Open Spotify search page
    window.open(song.spotify, "_blank");
  };

  // =========================
  // SCROLL TO SECTION
  // =========================

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">
            <Music2 size={20} />
          </span>

          Music<span>Verse</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#artists"
            onClick={() => setMenuOpen(false)}
          >
            Artists
          </a>

          <a
            href="#music"
            onClick={() => setMenuOpen(false)}
          >
            Music
          </a>

          <a
            href="#events"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </a>

        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="eyebrow">
            TELUGU MUSIC DISCOVERY
          </p>

          <h1>
            Discover the
            <br />
            <span>sound of Tollywood.</span>
          </h1>

          <p className="hero-description">
            Explore Telugu artists, trending songs and upcoming
            music experiences — all in one beautiful platform.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection("artists")}
            >
              Explore Artists
              <ArrowRight size={18} />
            </button>

            <button
              className="secondary-btn"
              onClick={() => playSong(songs[0])}
            >
              <Play size={16} fill="currentColor" />
              Play Music
            </button>

          </div>

          <div className="stats">

                <div>
                    <strong>Telugu</strong>
                    <span>Music Focus</span>
                </div>

                <div>
                    <strong>Spotify</strong>
                    <span>Music Links</span>
                </div>

                <div>
                    <strong>Live</strong>
                    <span>Event Discovery</span>
                </div>

            </div>

        </div>


        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-card">

            <Music2 size={60} />

            <p>NOW DISCOVERING</p>

            <h2>Telugu Music</h2>

            <span>
              Mana Music • Mana Vibe
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          ARTISTS
      ========================= */}

      <section className="section" id="artists">

        <div className="section-header">

          <div>

            <p className="section-label">
              ARTISTS
            </p>

            <h2>
              Meet the voices.
            </h2>

          </div>


          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search artist, song or movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>


        {/* ARTIST CARDS */}

        <div className="artist-grid">

          {filteredArtists.length > 0 ? (

            filteredArtists.map((artist) => (

              <div
                className="artist-card"
                key={artist.name}
              >

                <div
                  className="artist-image"
                  style={{
                    backgroundImage: `url(${artist.image})`
                  }}
                >

                  <button
                    className={
                      favorites.includes(artist.name)
                        ? "favorite active"
                        : "favorite"
                    }
                    onClick={() =>
                      toggleFavorite(artist.name)
                    }
                    aria-label={`Favorite ${artist.name}`}
                  >

                    <Heart
                      size={18}
                      fill={
                        favorites.includes(artist.name)
                          ? "currentColor"
                          : "none"
                      }
                    />

                  </button>

                </div>


                <div className="artist-info">

                  <p>{artist.role}</p>

                  <h3>{artist.name}</h3>

                  <span>{artist.genre}</span>

                </div>

              </div>

            ))

          ) : (

            <p className="no-results">
              No artist found.
            </p>

          )}

        </div>


        {/* =========================
            SEARCHED SONG RESULTS
        ========================= */}

        {search.trim() !== "" && filteredSongs.length > 0 && (

          <div className="search-results">

            <div className="search-results-header">

              <div>
                <p className="section-label">
                  SEARCH RESULTS
                </p>

                <h3>
                  Songs you may like
                </h3>
              </div>

            </div>


            <div className="search-song-list">

              {filteredSongs.map((song, index) => (

                <button
                  className="search-song"
                  key={song.title}
                  onClick={() => playSong(song)}
                >

                  <span className="song-number">
                    0{index + 1}
                  </span>

                  <span className="song-info">

                    <strong>
                      {song.title}
                    </strong>

                    <small>
                      {song.artist} • {song.movie}
                    </small>

                  </span>

                  <span className="song-duration">
                    {song.duration}
                  </span>

                  <span className="search-play">

                    <Play
                      size={16}
                      fill="currentColor"
                    />

                  </span>

                </button>

              ))}

            </div>

          </div>

        )}

      </section>


      {/* =========================
          MUSIC
      ========================= */}

      <section
        className="section music-section"
        id="music"
      >

        <div className="section-header">

          <div>

            <p className="section-label">
              TRENDING MUSIC
            </p>

            <h2>
              Listen to the vibe.
            </h2>

          </div>

        </div>


        <div className="music-layout">

          {/* SONG LIST */}

          <div className="song-list">

            {songs.map((song, index) => (

              <button
                className={
                  currentSong.title === song.title
                    ? "song active"
                    : "song"
                }
                key={song.title}
                onClick={() => playSong(song)}
              >

                <span className="song-number">
                  0{index + 1}
                </span>

                <span className="song-info">

                  <strong>
                    {song.title}
                  </strong>

                  <small>
                    {song.artist} • {song.movie}
                  </small>

                </span>

                <span className="song-duration">
                  {song.duration}
                </span>

                <Play
                  size={16}
                  fill={
                    currentSong.title === song.title
                      ? "currentColor"
                      : "none"
                  }
                />

              </button>

            ))}

          </div>


          {/* PLAYER */}

          <div className="player">

            <div className="player-art">

              <Music2 size={55} />

            </div>

            <p>
              NOW PLAYING
            </p>

            <h3>
              {currentSong.title}
            </h3>

            <span>
              {currentSong.artist} • {currentSong.movie}
            </span>


            <div className="progress">
              <div></div>
            </div>


            <div className="player-controls">

              <button
                className="play-main"
                onClick={() => playSong(currentSong)}
                aria-label="Play on Spotify"
              >

                {playing ? (
                  <span>Ⅱ</span>
                ) : (
                  <Play
                    size={20}
                    fill="currentColor"
                  />
                )}

              </button>

            </div>


            <button
              className="spotify-button"
              onClick={() => playSong(currentSong)}
            >
              Open in Spotify
              <ExternalLink size={15} />
            </button>

          </div>

        </div>

      </section>


      {/* =========================
          EVENTS
      ========================= */}

      <section
        className="section"
        id="events"
      >

        <div className="section-header">

          <div>

            <p className="section-label">
              UPCOMING
            </p>

            <h2>
              Live experiences.
            </h2>

          </div>

        </div>


        <div className="events">

          {events.map((event) => (

            <a
              className="event-card"
              key={event.title}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="event-date">

                <strong>
                  {event.date}
                </strong>

                <span>
                  {event.month}
                </span>

              </div>


              <div>

                <p>
                  {event.location}
                </p>

                <h3>
                  {event.title}
                </h3>

                <span className="event-link">
                  View event details
                  <ExternalLink size={14} />
                </span>

              </div>


              <Calendar size={20} />

            </a>

          ))}

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <div className="logo">

          <span className="logo-icon">

            <Music2 size={18} />

          </span>

          Music<span>Verse</span>

        </div>


        <p>
          Artist & Music Discovery Platform • Built with React
        </p>

      </footer>

    </div>
  );
}


// =========================
// RENDER APP
// =========================

createRoot(
  document.getElementById("root")
).render(
  <App />
);