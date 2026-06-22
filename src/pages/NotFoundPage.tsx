import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="main-content not-found-page">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <p>La URL solicitada no existe en el sitio.</p>
      <Link to="/" className="back-link">Volver al inicio</Link>
    </main>
  );
}
