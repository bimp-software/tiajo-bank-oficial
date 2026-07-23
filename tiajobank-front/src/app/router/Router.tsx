import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LangGuard from "./LangGuard"
import { publicRoutes } from "./routes/publicRoutes"

import { PageLoader } from "../../shared/components/feedback/PageLoader"

const LayoutPublic = lazy(() => import("../../layouts/PublicLayout"));


function renderRoutes(routes: typeof publicRoutes): React.ReactNode {
  return routes.map((route, index) => {
    if (route.children) {
      return (
        <Route
          key={`${route.path ?? "index"}-${index}`}
          path={route.path}
          element={route.element}
          index={route.index}
        >
          {renderRoutes(route.children as typeof publicRoutes)}
        </Route>
      );
    }

    return (
      <Route
        key={`${route.path ?? "index"}-${index}`}
        path={route.path}
        element={route.element}
        index={route.index}
      />
    );
  });
}

export default function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />

        <Route element={<LangGuard />}>
          <Route path="/:lang" element={<LayoutPublic />}>
            {renderRoutes(publicRoutes)}
          </Route>

          <Route path="*" element={<Navigate to="/es" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}