import Intro from "./components/intro";
import NavBar from "./components/navbar";
import WorkEx from "./components/workEx";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <div>
          <Intro />
        </div>
        <div>
          <WorkEx />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}