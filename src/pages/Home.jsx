import './Home.css';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Loading from '../components/Loading';

export default function Home() {
  return (
    <div className="home">
      <Header />

      <main className="main">
        <Logo />

        <section className="loading-section">
          <Loading />
        </section>
      </main>
    </div>
  );
}
