import './Header.css';

export default function Header() {
  const subTitle = import.meta.env.DEV ? "Development" : "Production";

  return (
    <header className="header">
      <h1 className="title">React Template</h1>
      <h2 className="subtitle">{subTitle}</h2>
    </header>
  );
}
