import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import SiteNav from './SiteNav';
import SequentialPager from './SequentialPager';
import RouteTransitionOverlay from './RouteTransitionOverlay';
import { Heart } from 'lucide-react';

export default function SiteLayout() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(location.pathname);

  useEffect(() => {
    // Trigger transition on route change
    if (location.pathname !== displayPath) {
      setIsTransitioning(true);
    }
  }, [location.pathname, displayPath]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setDisplayPath(location.pathname);
  };

  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-rose-200/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
            <span className="text-xl font-serif font-semibold text-rose-600">Happy Valentine's Day</span>
          </div>
          <SiteNav />
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <SequentialPager />

      <footer className="border-t border-rose-200/50 bg-background/95 backdrop-blur py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} · Built with{' '}
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500 inline animate-pulse" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 underline underline-offset-4"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      <RouteTransitionOverlay 
        isActive={isTransitioning} 
        onComplete={handleTransitionComplete}
      />
    </div>
  );
}
