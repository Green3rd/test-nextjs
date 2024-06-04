import { SideNav } from '@/app/ui/dashboard/sidenav';
import { GreenLogo } from '../ui/green-logo';
import { GreenLinks } from '../ui/dashboard/green-links';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav logo={<GreenLogo />} links={<GreenLinks />} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}