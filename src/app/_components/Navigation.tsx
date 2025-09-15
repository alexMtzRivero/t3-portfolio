interface NavItem {
  href: string;
  text: string;
}

interface NavigationProps {
  navItems: NavItem[];
}

export function Navigation({ navItems }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-secondary-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary-900 font-canela">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                {...(item.href.startsWith('/') ? { target: '_self' } : {})}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
