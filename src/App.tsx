import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <FavoritesProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </FavoritesProvider>
  );
}

export default App;
