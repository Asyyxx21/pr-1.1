import './App.css';

type EmojiCard = {
  id: number;
  emoji: string;
  name: string;
  description: string;
};

const emojis: EmojiCard[] = [
  {
    id: 1,
    emoji: '💯',
    name: '100',
    description: 'Hundred, points, symbol, wow, win, perfect, parties',
  },
  {
    id: 2,
    emoji: '🔢',
    name: '1234',
    description: 'Input symbol for numbers symbol',
  },
  {
    id: 3,
    emoji: '🔢',
    name: '1234',
    description: 'Input symbol for numbers symbol',
  },
];

function App() {
  return (
    <div className="app">
      {/* Hero / Header */}
      <header className="hero">
        <h1 className="hero__title">Emoji Finder</h1>
        <p className="hero__subtitle">Find emoji by keywords</p>
      </header>

      {/* Search bar */}
      <div className="search-wrapper">
        <input
          className="search"
          type="text"
          placeholder="Placeholder"
          aria-label="Search emoji"
        />
      </div>

      {/* Cards grid */}
      <main className="cards">
        {emojis.map((item) => (
          <article className="card" key={item.id}>
            <div className="card__emoji" aria-hidden="true">
              {item.emoji}
            </div>
            <h2 className="card__name">{item.name}</h2>
            <p className="card__desc">{item.description}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;