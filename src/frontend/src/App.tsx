import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import Page1Landing from './pages/Page1Landing';
import Page2Memories from './pages/Page2Memories';
import Page3Flowers from './pages/Page3Flowers';
import Page4Gallery from './pages/Page4Gallery';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Page1Landing,
});

const memoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/memories',
  component: Page2Memories,
});

const flowersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/flowers',
  component: Page3Flowers,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Page4Gallery,
});

const routeTree = rootRoute.addChildren([indexRoute, memoriesRoute, flowersRoute, galleryRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
