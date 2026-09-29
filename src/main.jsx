import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  Search,
  Gamepad2,
  Trophy,
  Users,
  ShoppingBag,
  ArrowRight,
  Play,
  Zap,
} from "lucide-react";
import "./styles.css";

const games = [
  {
    title: "NEON STRIKE",
    genre: "FPS / ACTION",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "CYBER ARENA",
    genre: "COMPETITIVE",
    image:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "VELOCITY X",
    genre: "RACING",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
  },
];

const players = [
  ["VEXOR", "24,850", "01"],
  ["NOVA", "22,410", "02"],
  ["RAVEN", "20,980", "03"],
  ["KAIRO", "19,740", "04"],
  ["ZERO", "18,630", "05"],
];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span>TIVA</span>
          <small>GAMING</small>
        </div>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenu(false)}>
            Home
          </a>
          <a href="#games" onClick={() => setMenu(false)}>
            Games
          </a>
          <a href="#ranking" onClick={() => setMenu(false)}>
            Ranking
          </a>
          <a href="#community" onClick={() => setMenu(false)}>
            Community
          </a>
          <a href="#store" onClick={() => setMenu(false)}>
            Store
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => notify("Search coming soon")}
          >
            <Search size={20} />
          </button>

          <button className="login-btn" onClick={() => setLogin(true)}>
            SIGN IN
          </button>

          <button className="mobile-menu" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <Zap size={16} /> THE NEXT LEVEL OF GAMING
            </div>

            <h1>
              PLAY
              <br />
              <span>WITHOUT</span>
              <br />
              LIMITS.
            </h1>

            <p>
              Enter the TIVA GAMING universe. Compete, dominate and connect
              with players from around the world.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => notify("Welcome to TIVA GAMING")}
              >
                START PLAYING <ArrowRight size={19} />
              </button>

              <button
                className="secondary-btn"
                onClick={() => notify("Game library opened")}
              >
                <Play size={18} /> EXPLORE GAMES
              </button>
            </div>

            <div className="stats">
              <div>
                <strong>2.4M+</strong>
                <span>PLAYERS</span>
              </div>

              <div>
                <strong>180+</strong>
                <span>TOURNAMENTS</span>
              </div>

              <div>
                <strong>98</strong>
                <span>COUNTRIES</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="ring ring-one"></div>
            <div className="ring ring-two"></div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span>LIVE</span>
                <span>01 : 42 : 18</span>
              </div>

              <div className="fighter">
                <Gamepad2 size={100} strokeWidth={1} />
              </div>

              <div className="hero-card-bottom">
                <strong>TIVA ARENA</strong>
                <span>RANKED MATCH</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div>
            <span>● LIVE MATCHES</span>
            <span>NEON STRIKE — 12,480 PLAYERS</span>
            <span>CYBER ARENA — 8,291 PLAYERS</span>
            <span>VELOCITY X — 6,921 PLAYERS</span>
          </div>
        </div>

        <section className="section" id="games">
          <div className="section-heading">
            <div>
              <span className="section-label">DISCOVER</span>
              <h2>FEATURED GAMES</h2>
            </div>

            <button
              className="outline-btn"
              onClick={() => notify("All games coming soon")}
            >
              VIEW ALL <ArrowRight size={17} />
            </button>
          </div>

          <div className="game-grid">
            {games.map((game, index) => (
              <article className="game-card" key={game.title}>
                <img src={game.image} alt={game.title} />

                <div className="game-overlay"></div>

                <div className="game-number">0{index + 1}</div>

                <div className="game-info">
                  <span>{game.genre}</span>
                  <h3>{game.title}</h3>
                  <button onClick={() => notify(`${game.title} selected`)}>
                    PLAY NOW <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section ranking-section" id="ranking">
          <div className="section-heading">
            <div>
              <span className="section-label">COMPETE</span>
              <h2>TOP PLAYERS</h2>
            </div>

            <button
              className="outline-btn"
              onClick={() => notify("Full ranking coming soon")}
            >
              FULL RANKING <Trophy size={17} />
            </button>
          </div>

          <div className="ranking-list">
            {players.map(([name, points, rank]) => (
              <div className="player-row" key={name}>
                <span className="rank">{rank}</span>

                <div className="avatar">
                  {name.charAt(0)}
                </div>

                <div className="player-name">
                  <strong>{name}</strong>
                  <span>ELITE PLAYER</span>
                </div>

                <div className="player-points">
                  <span>POINTS</span>
                  <strong>{points}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="challenge" id="community">
          <div className="challenge-glow"></div>

          <div>
            <span className="section-label">WEEKLY CHALLENGE</span>
            <h2>RISE TO THE TOP.</h2>
            <p>
              Complete this week's missions and earn exclusive rewards.
            </p>

            <button
              className="primary-btn"
              onClick={() => notify("Challenge joined")}
            >
              JOIN CHALLENGE <ArrowRight size={18} />
            </button>
          </div>

          <div className="challenge-icon">
            <Trophy size={130} strokeWidth={1} />
          </div>
        </section>

        <section className="store" id="store">
          <div>
            <span className="section-label">TIVA STORE</span>
            <h2>GEAR UP.</h2>
            <p>Exclusive gaming gear for the next generation.</p>
          </div>

          <button
            className="primary-btn"
            onClick={() => notify("Store coming soon")}
          >
            OPEN STORE <ShoppingBag size={18} />
          </button>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          TIVA <span>GAMING</span>
        </div>

        <p>PLAY. COMPETE. DOMINATE.</p>

        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#games">GAMES</a>
          <a href="#ranking">RANKING</a>
          <a href="#community">COMMUNITY</a>
        </div>

        <div className="copyright">
          © 2026 TIVA GAMING. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {login && (
        <div className="modal-backdrop" onClick={() => setLogin(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setLogin(false)}>
              <X />
            </button>

            <div className="modal-icon">
              <Users size={30} />
            </div>

            <span className="section-label">WELCOME BACK</span>
            <h2>SIGN IN</h2>

            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />

            <button
              className="primary-btn full"
              onClick={() => {
                setLogin(false);
                notify("Demo login successful");
              }}
            >
              SIGN IN <ArrowRight size={18} />
            </button>

            <small>Demo interface — authentication is not connected yet.</small>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);