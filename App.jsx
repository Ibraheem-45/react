import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-dot"></span>
          Skillora
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#test">Build Test</a>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="badge">
            🚀 React + Vite Cloud Build Test
          </div>

          <h1>
            Your React project is
            <span> LIVE!</span>
          </h1>

          <p>
            If you can see this beautiful page, your Skillora Cloud
            Build Runner successfully built and deployed this React app.
          </p>

          <div className="buttons">
            <a className="primary-btn" href="#test">
              Test React →
            </a>

            <a className="secondary-btn" href="#features">
              View Features
            </a>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Vite</h3>
            <p>Production Build</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚛️</div>
            <h3>React 18</h3>
            <p>Component Runtime</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">☁️</div>
            <h3>Skillora</h3>
            <p>Cloud Deployment</p>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-label">FEATURES</div>

          <h2>Everything is working</h2>

          <p className="section-text">
            This page contains real React components, CSS styling,
            state management and interactive UI.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <span>🎨</span>
              <h3>Modern UI</h3>
              <p>
                Responsive gradient-based interface with cards,
                buttons and animations.
              </p>
            </div>

            <div className="feature-card">
              <span>⚙️</span>
              <h3>React State</h3>
              <p>
                The counter below proves JavaScript and React
                functionality are running correctly.
              </p>
            </div>

            <div className="feature-card">
              <span>📦</span>
              <h3>Vite Build</h3>
              <p>
                The project is compiled through the Vite production
                build process.
              </p>
            </div>
          </div>
        </section>

        <section id="test" className="test-section">
          <div className="test-box">
            <div className="success">✓</div>

            <h2>React Build Test</h2>

            <p>
              Click the button below. If the number changes, your
              deployed React application is fully interactive.
            </p>

            <div className="counter">
              <button onClick={() => setCount(count - 1)}>
                −
              </button>

              <strong>{count}</strong>

              <button onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>

            <div className="success-message">
              ✓ React JavaScript is working correctly
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-dot"></span>
          Skillora
        </div>

        <p>React + Vite Cloud Build Test</p>
      </footer>
    </div>
  );
}

export default App;
