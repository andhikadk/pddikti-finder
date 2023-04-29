'use client';

import { RecoilRoot } from 'recoil';

const MahasiswaLayout = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default MahasiswaLayout;
