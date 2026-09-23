@AGENTS.md
# Portfolio Kevin Rodríguez

## 1. Propósito del proyecto

Este repositorio contiene el portfolio profesional de Kevin Rodríguez, Ingeniero Informático y Frontend Engineer.

El objetivo es construir un portfolio profesional, moderno, accesible, responsive y de alta calidad técnica que presente:

- experiencia profesional;
- especialización técnica;
- proyectos relevantes;
- arquitectura y decisiones técnicas;
- contacto y enlaces profesionales.

El portfolio debe transmitir principalmente un perfil de:

- Frontend Engineer
- React Developer
- Next.js Developer
- TypeScript Developer
- experiencia en Microfrontends y arquitectura frontend

También debe reflejar experiencia complementaria en:

- Node.js
- NestJS
- APIs REST
- PostgreSQL
- Laravel/PHP
- React Native
- Docker
- Kubernetes

No inventar experiencia, tecnologías, métricas, responsabilidades ni logros.

---

## 2. Stack tecnológico

Stack principal:

- Next.js — App Router
- React
- TypeScript
- Tailwind CSS
- CSS Modules cuando exista una necesidad concreta
- ESLint
- Git

Principios de implementación:

- Server Components por defecto.
- Client Components únicamente cuando exista una necesidad real de interactividad, estado, eventos o APIs del navegador.
- TypeScript con tipado estricto.
- HTML semántico.
- Responsive design.
- Accesibilidad.
- SEO.
- Performance.

No agregar dependencias sin una necesidad real y justificada.

---

## 3. Objetivo técnico

El proyecto debe ser:

- mantenible;
- legible;
- reutilizable;
- accesible;
- responsive;
- performante;
- correctamente tipado;
- fácil de evolucionar.

La calidad del código es prioritaria, pero la arquitectura debe ser proporcional al tamaño y complejidad real del portfolio.

EVITAR SOBREINGENIERÍA.

No crear capas, abstracciones, patrones, servicios o estructuras únicamente para que el proyecto parezca enterprise.

Cada abstracción debe resolver un problema real.

---

## 4. Arquitectura

Usar una arquitectura frontend pragmática y orientada a responsabilidades.

La organización debe favorecer una separación clara entre:

- aplicación y rutas;
- componentes reutilizables;
- secciones funcionales;
- contenido/datos;
- hooks;
- utilidades;
- tipos;
- estilos;
- assets.

La estructura debe crecer de forma ordenada sin introducir complejidad innecesaria.

Preferir organización por responsabilidad y dominio funcional antes que una organización excesivamente técnica.

Ejemplo conceptual:

```text
src/
├── app/
├── components/
├── features/
├── hooks/
├── data/
├── lib/
├── types/
└── styles/