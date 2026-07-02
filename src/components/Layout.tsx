import Navigation from './Navigation';
import Footer from './Footer';
import { useLenis } from '@/hooks/useLenis';


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  useLenis();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
