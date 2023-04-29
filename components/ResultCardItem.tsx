'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms';

const ResultCardItem = ({ mhs }: any) => {
  const [search, setSearch] = useRecoilState(searchState);
  const link = mhs.link.split('/');

  return (
    <div
      className={clsx(
        'flex flex-col sm:flex-row justify-between w-full p-4 gap-2 rounded-md overflow-clip',
        mhs.name === search.toUpperCase()
          ? 'bg-emerald-700 hover:bg-emerald-800'
          : 'bg-neutral-600 hover:bg-neutral-700'
      )}>
      <div className='flex flex-col'>
        <Link href={`mahasiswa/${link[2]}`}>
          <h5 className='hover:underline hover:cursor-pointer'>{mhs.name}</h5>
        </Link>
        <p className='text-sm'>NIM/NPM: {mhs.nim}</p>
      </div>
      <div className='flex flex-col sm:text-end'>
        <h5>{mhs.pt}</h5>
        <p className='text-sm'>{mhs.prodi}</p>
      </div>
    </div>
  );
};

export default ResultCardItem;
