import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import type { LoginFormValues } from "../types/login.types";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="main-content login-page">
        <div className="login-success">
          <h1>Inicio de sesión exitoso</h1>
          <p>Has iniciado sesión correctamente.</p>
          <Link to="/" className="search-button" style={{ textDecoration: "none", display: "inline-block" }}>
            Ir al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header title="Iniciar Sesión" />
      <main className="main-content login-page">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            className={`form-input ${errors.name ? "form-input--error" : ""}`}
            placeholder="Tu nombre"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && (
            <span className="form-error">{errors.name.message}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={`form-input ${errors.email ? "form-input--error" : ""}`}
            placeholder="correo@ejemplo.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un email válido",
              },
            })}
          />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            className={`form-input ${errors.password ? "form-input--error" : ""}`}
            placeholder="Mínimo 8 caracteres"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="form-error">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="search-button">
          Iniciar Sesión
        </button>
      </form>
    </main>
    </>
  );
}
