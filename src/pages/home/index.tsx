import MainLayout from '../../layout/mainLayout';
import MainNav from '@/layout/components/main-nav';
import GeneralPanel from '@/layout/components/general-panel'

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          <GeneralPanel />
          <MainNav />
        </div>
      </MainLayout>
    </>
  );
}