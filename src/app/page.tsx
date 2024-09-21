import DeveloperTools from "./components/developerTools";
import Intro from "./components/intro";
import Languages from "./components/languages";
import NavBar from "./components/navbar";
import WorkEx from "./components/workEx";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <Intro />
        <DeveloperTools />
        <Languages />
        <WorkEx />
      </main>
      <footer></footer>
    </div>
  );
}