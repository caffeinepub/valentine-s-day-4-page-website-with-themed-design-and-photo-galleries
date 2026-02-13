import { useRouterState, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Heart, Image, Flower2, Images } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Heart },
  { path: '/memories', label: 'Memories', icon: Image },
  { path: '/flowers', label: 'Gifts', icon: Flower2 },
  { path: '/gallery', label: 'Gallery', icon: Images },
];

export default function SiteNav() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPath === item.path;
        return (
          <Button
            key={item.path}
            variant={isActive ? 'default' : 'ghost'}
            size="sm"
            onClick={() => navigate({ to: item.path })}
            className={isActive ? 'bg-rose-500 hover:bg-rose-600' : 'hover:bg-rose-50'}
          >
            <Icon className="h-4 w-4 mr-1.5" />
            <span className="hidden sm:inline">{item.label}</span>
          </Button>
        );
      })}
    </nav>
  );
}
