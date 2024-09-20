import Intro from "./components/intro";
import NavBar from "./components/navbar";
import WorkEx from "./components/workEx";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <div className="p-8">
          <Intro />
        </div>
        <div className="p-8">
          <WorkEx />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}