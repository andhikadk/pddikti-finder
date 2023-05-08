'use client';

import * as React from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms';
import { cvMahasiswa } from '@/utils/cvMahasiswa';
import Loading from './Loading';
import ResultCardItem from './ResultCardItem';

type Mahasiswa = {
  name: string;
  nim: string;
  pt: string;
  prodi: string;
  link: string;
} | null;

const ResultCard = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [mahasiswa, setMahasiswa] = React.useState<Mahasiswa[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchMahasiswa = async () => {
      if (search && search.length > 4) {
        setIsLoading(true);
        setMahasiswa([]);
        const res = await axios.get(`api/hit_mhs/${search}`);
        setIsLoading(false);
        setMahasiswa(cvMahasiswa(res.data.mahasiswa));
      }
    };
    fetchMahasiswa();
  }, [search]);

  return (
    <div className='flex flex-col w-full mt-8 gap-3 text-white'>
      {isLoading && (
        <div className='flex justify-center'>
          <Loading />
        </div>
      )}
      {mahasiswa &&
        mahasiswa.map(
          (mhs) => mhs && <ResultCardItem mhs={mhs} key={mhs.link} />
        )}
    </div>
  );
};

export default ResultCard;
