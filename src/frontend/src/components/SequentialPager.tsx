import { useRouterState, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pages = ['/', '/memories', '/flowers', '/gallery'];

export default function SequentialPager() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const currentIndex = pages.indexOf(currentPath);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < pages.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      navigate({ to: pages[currentIndex - 1] });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      navigate({ to: pages[currentIndex + 1] });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-3 bg-background/95 backdrop-blur border border-rose-200 rounded-full px-4 py-2 shadow-lg">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          disabled={!hasPrevious}
          className="rounded-full h-10 w-10 p-0 hover:bg-rose-50 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          {pages.map((page, index) => (
            <button
              key={page}
              onClick={() => navigate({ to: page })}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-rose-500' : 'w-2 bg-rose-200 hover:bg-rose-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          disabled={!hasNext}
          className="rounded-full h-10 w-10 p-0 hover:bg-rose-50 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
