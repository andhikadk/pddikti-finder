'use client';

import { useRouter } from 'next/navigation';
import Search from '@/components/Search';
import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms';
import ResultCard from '@/components/ResultCard';

const ResultsPage = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const router = useRouter();

  // if the search state is empty, show the search component
  if (!search) {
    router.push('/mahasiswa');
    return null;
  }

  return (
    <main className='flex flex-col mx-auto max-w-[48rem] items-center justify-center p-8'>
      <h1 className='text-white text-center'>Cari Data Mahasiswa</h1>
      <Search />
      <ResultCard />
    </main>
  );
};

export default ResultsPage;
