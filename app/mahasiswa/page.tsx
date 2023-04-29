import ResultCard from '@/components/ResultCard';
import Search from '@/components/Search';

const Mahasiswa = () => {
  return (
    <main className='flex flex-col mx-auto max-w-[48rem] items-center justify-center p-8'>
      <h1 className='text-white text-center'>Cari Data Mahasiswa</h1>
      <Search />
      <ResultCard apiUrl={process.env.BASE_URL} />
    </main>
  );
};

export default Mahasiswa;
