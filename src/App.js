import HeaderSvg from "./HeaderSvg";
import MainSvg from "./MainSvg";
import fbLogo from "./images/facebook.png";
import twLogo from "./images/twitter.png";
import igLogo from "./images/instagram (1).png";

function App() {
  return (
    <div>
      <header>
        <HeaderSvg />
      </header>
      <main>
        <section className="grid-container">
          <section className="main-svg-container">
            <MainSvg />
          </section>
          <section className="text">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>
          </section>
        </section>
      </main>
      <footer>
        <section className="flex-container">
          <img src={fbLogo} alt="facebook logo" />
          <img src={twLogo} alt="twitter logo" />
          <img src={igLogo} alt="instagram logo" />
        </section>
      </footer>
    </div>
  );
}

export default App;
