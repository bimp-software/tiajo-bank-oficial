import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LangGuard from "./LangGuard"
import { publicRoutes } from "./routes/publicRoutes"

const LayoutPublic = lazy(() => import("../../layouts/PublicLayout"));

function renderRoutes(routes: typeof publicRoutes): React.ReactNode {
  return routes.map((r, i) =>
    r.children ? (
      <Route key={i} path={r.path} element={r.element} index={r.index}>
        {renderRoutes(r.children as typeof publicRoutes)}
      </Route>
    ) : (
      <Route key={i} path={r.path} element={r.element} index={r.index} />
    )
  );
}

export default function Router() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/es" replace />} />

                <Route element={ <LangGuard/> }>
                    <Route path="/:lang" element={ <LayoutPublic/> }>
                        { renderRoutes(publicRoutes) }
                    </Route>

                    <Route path="*" element={<Navigate to="/es" replace />} />
                </Route>
            </Routes>
        </Suspense>
    );
}