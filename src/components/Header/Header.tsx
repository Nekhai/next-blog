import { Navigation } from '@/components/Header/Navigation';
import { Login } from '@/components/Header/Login';

export const Header = () => (

  <header className="fixed flex justify-between w-full p-2 bg-primary-dark">
    <Navigation />
    <Login />
  </header>
);
