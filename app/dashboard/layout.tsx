import { SideNav } from '@/app/ui/dashboard/sidenav';
import AcmeLogo from '../ui/acme-logo';
import NavLinks from '../ui/dashboard/nav-links';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav logo={<AcmeLogo />} links={<NavLinks />} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}