

function App() {
  const [selectedPlanet, setSelectedPlanet] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const planets = [
    { name: 'Mercury', description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.' },
    { name: 'Venus', description: 'Venus is the second planet from the Sun and is the hottest planet in the Solar System. It is named after the Roman goddess of love and beauty.' },
    { name: 'Earth', description: 'Earth is the third planet from the Sun and the only known planet to harbor life. It is a terrestrial planet with a diverse range of environments, including oceans, continents, and ice caps.' },
    { name: 'Mars', description: 'Mars is the fourth planet from the Sun and is known as the "Red Planet" due to its reddish appearance. It is a terrestrial planet with a thin atmosphere and a cold, desert-like surface.' },
  ];

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="planet-buttons">
        {planets.map((planet) => (
          <button
            key={planet.name}
            className={`planet-button ${selectedPlanet === planet ? 'selected' : ''}`}
            onClick={() => handlePlanetClick(planet)}
          >
            {planet.name}
          </button>
        ))}
      </div>

      {selectedPlanet && (
        <div className="planet-info">
          <h3>{selectedPlanet.name}</h3>
          <p>{selectedPlanet.description}</p>
          <a href="#" className="learn-more">
            Learn more
          </a>
        </div>
      )}

      <div className="dark-mode-toggle">
        <label htmlFor="dark-mode-switch">Dark mode</label>
        <input
          type="checkbox"
          id="dark-mode-switch"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
        />
      </div>
    </div>
  );
}
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

