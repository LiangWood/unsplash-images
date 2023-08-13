import { Galley } from "./Galley";
import { SearchForm } from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Galley />
    </main>
  );
};
export default App;
