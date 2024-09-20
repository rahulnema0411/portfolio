import DeveloperTools from "./components/developerTools";
import Intro from "./components/intro";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <div>
          <Intro />
        </div>
        <div>
          <DeveloperTools />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}