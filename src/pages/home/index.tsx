import MainLayout from '../../layout/mainLayout';
import GeneralPanel from '@/layout/components/general-panel'

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          <GeneralPanel />
        </div>
      </MainLayout>
    </>
  );
}