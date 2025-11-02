import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import SynapseHeader from './components/MainPage/SynapseHeader';

export default function LayoutSynapse(): JSX.Element {
  return (
    <div className="layout">
      <SynapseHeader />
      <main className="layout_content">
        <Outlet />
      </main>
    </div>
  );
}
