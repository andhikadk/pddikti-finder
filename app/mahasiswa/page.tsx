import Search from '@/components/Search';
import Link from 'next/link';

const otherSearch = [
  {
    label: 'Dosen',
    link: '/dosen',
  },
  {
    label: 'PT',
    link: '/pt',
  },
  {
    label: 'Prodi',
    link: '/prodi',
  },
];

const Mahasiswa = () => {
  return (
    <main className='flex flex-col h-screen mx-auto max-w-[48rem] items-center justify-center p-8'>
      <h1 className='text-white text-center'>Cari Data Mahasiswa</h1>
      <Search />
      <div className='flex flex-row mt-4 gap-3'>
        {otherSearch.map((s) => (
          <Link
            key={s.link}
            href='/mahasiswa'
            className='w-fit px-4 py-1 text-xs text-neutral-400 hover:text-neutral-500 rounded-full border border-emerald-800 hover:border-emerald-900 focus:outline-none focus:border-emerald-900 cursor-not-allowed'>
            {s.label}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Mahasiswa;
