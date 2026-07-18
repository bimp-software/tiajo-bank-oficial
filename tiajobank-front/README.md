# TíaJo Bank — Frontend

Plataforma escolar gamificada multi-tenant: economía simbólica, gestión educativa, radio, TV, juegos con Unity y creador de insignias. Este repositorio contiene el frontend (React + TypeScript), consumido por una API Laravel separada (repositorio `tiajo-bank`).

## Stack

- **React 19** + **TypeScript** + **Vite**
- **React Router v6** — enrutamiento por idioma (`/:lang/...`) y por institución (`/:lang/:accessCode/dashboard`)
- **i18next** — 6 idiomas: es (por defecto), en, fr, ja, zh, pt
- **Bootstrap 5** — utility-first, mínimo CSS custom, un solo design system para todo el proyecto
- **TanStack Query** — cache y sincronización de datos remotos
- **Zustand** — estado de sesión (token en memoria, no en `localStorage`)
- **Zod + React Hook Form** — validación de formularios y de respuestas de API
- **Axios** — cliente HTTP hacia la API Laravel (Bearer token, no cookies — front y back van en dominios separados)

### Librerías por feature

| Feature | Librería |
|---|---|
| Notificaciones | `sonner` |
| Gráficos (saldo, ranking) | `recharts` |
| Animaciones | `motion` |
| Tours guiados del dashboard | `react-joyride` |
| Skeleton loaders | `react-loading-skeleton` |
| Editor de insignias (canvas) | `fabric` |
| Juegos WebGL | `react-unity-webgl` |
| Radio (streaming audio) | `react-h5-audio-player` |
| TV / video | `react-player` |
| Subida de archivos | `react-dropzone` |
| Fechas | `dayjs` |
| Sanitización de HTML dinámico | `dompurify` |
| Pagos (tokenización de tarjeta) | `@mercadopago/sdk-react` |
| PWA / soporte offline | `vite-plugin-pwa` |
| SEO por página | `react-helmet-async` |

## Estructura de carpetas

```
src/
├── app/
│   ├── config/
│   ├── constants/          # roles.ts, languages.ts, regex.ts
│   ├── hooks/               # useAuth, useLogin, useLogout
│   ├── i18n/                 # config i18next + LanguageSync
│   ├── providers/            # QueryProvider, AuthProvider, ErrorBoundary
│   ├── router/
│   │   ├── Router.tsx
│   │   ├── paths.ts
│   │   ├── LangGuard.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── RoleGuard.tsx
│   │   └── routes/           # publicRoutes, authRoutes, dashboardRoutes
│   └── store/                 # authStore (zustand)
│
├── components/
│   └── ui/                    # Button, Input, Card — atómicos, sin lógica de negocio
│
├── layouts/
│   ├── PublicLayout.tsx
│   ├── DashboardLayout.tsx
│   ├── LayoutAuth.tsx
│   └── components/
│       ├── public/{Navbar,Footer}.tsx
│       └── dashboard/{Navbar,Footer,UserMenu}.tsx
│
├── pages/
│   ├── public/{inicio,que-es,beneficios,funcionalidades}/
│   ├── auth/{institucion,docente,apoderado,estudiante}/ + callback/
│   ├── errors/{NotFoundPage,ForbiddenPage,ServerErrorPage}.tsx
│   └── dashboard/
│       ├── educacion/          # Actividad, MaterialEducativo, LaboratorioVirtual, Evaluaciones
│       ├── gamificacion/        # Insignias, LigasTemporadas, MiRanita, MundoVirtual
│       ├── director/            # Cursos, Asignaturas, Docentes
│       ├── docentes/            # Estudiantes, Gamificación
│       ├── radio/
│       ├── tv/
│       ├── juegos/
│       └── insignias/
│
├── services/                   # una carpeta por dominio de la API
│   ├── http/client.ts
│   ├── auth/
│   ├── educacion/
│   ├── director/
│   └── docentes/
│
└── shared/
    ├── assets/
    ├── types/
    ├── schemas/                 # zod schemas — validan la respuesta real de la API
    └── components/
        ├── crud/                 # CrudPage, CrudTable, CrudForm, etc. — CRUD genérico
        ├── charts/
        ├── feedback/
        ├── form/
        └── media/                 # AudioPlayerCard, VideoPlayerCard, UnityGameCard
```

## Roles y multi-tenancy

Cada institución accede vía un `accessCode` único en la URL: `/:lang/:accessCode/dashboard`. Roles soportados: `institucion`, `director`, `docente`, `apoderado`, `estudiante`. Las rutas del dashboard están protegidas por `ProtectedRoute` (sesión) y `RoleGuard` (permiso por rol).

## Internacionalización

Namespaces por dominio de página (`inicio`, `que-es`, `beneficios`, `auth`, `dashboard`, `gamificacion`, etc.) en `public/locales/{lng}/{ns}.json`. El idioma se resuelve desde la URL (`:lang`) y se sincroniza automáticamente vía `LanguageSync` dentro de `LangGuard` — no requiere lógica manual en cada layout o página.

## Variables de entorno

```
VITE_API_BASE_URL=http://localhost:8000
VITE_MERCADOPAGO_PUBLIC_KEY=
VITE_APP_VERSION=1
```

## Instalación

```bash
pnpm install
pnpm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `pnpm run dev` | Servidor de desarrollo (Vite) |
| `pnpm run build` | Build de producción (`tsc -b && vite build`) |
| `pnpm run lint` | Lint con ESLint |
| `pnpm run preview` | Preview del build de producción |

## Convenciones

- Componentes en **PascalCase** (`Hero.tsx`, no `hero.tsx`)
- Un namespace de i18n por página/dominio
- Toda respuesta de API se valida contra un `zod` schema en `shared/schemas/` antes de usarse — nunca `as Tipo` a ciegas
- Nunca guardar secretos ni tokens en `localStorage`; el token de sesión vive en memoria (`authStore`)
- CRUD nuevo → usar `<CrudPage>` de `shared/components/crud/`, no reimplementar tabla/paginación/modal desde cero

## Backend

API Laravel separada — repositorio [`tiajo-bank`](https://github.com/bimp-software/tiajo-bank). Multi-tenant (`stancl/tenancy`), auth con Sanctum (modo token), DTOs con `spatie/laravel-data`, permisos con `spatie/laravel-permission`, login social con `laravel/socialite`, pagos con MercadoPago.

> Este frontend se desarrolla primero; algunos endpoints de la API aún no existen. El código está preparado para conectarse sin cambios estructurales una vez el backend esté listo.