import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col h-screen items-center justify-evenly text-center'>
      <div className='flex flex-col w-full gap-4 items-center p-8'>
        <h1 className='text-3xl text-white mb-2'>Cari Data PDDIKTI</h1>
        <Link href='/mahasiswa' className='w-full'>
          <button
            type='button'
            className='w-full sm:w-72 px-4 py-2 text-neutral-100 hover:text-neutral-300 rounded-md border-2 border-emerald-700 hover:border-emerald-800 focus:outline-none focus:border-emerald-800'>
            Mahasiswa
          </button>
        </Link>
        <Link href='/dosen' className='w-full'>
          <button
            type='button'
            disabled
            className='w-full sm:w-72 px-4 py-2 text-neutral-100 hover:text-neutral-300 rounded-md border-2 border-emerald-700 hover:border-emerald-800 focus:outline-none focus:border-emerald-800 cursor-not-allowed'>
            Dosen
          </button>
        </Link>
        <Link href='/pt' className='w-full'>
          <button
            type='button'
            disabled
            className='w-full sm:w-72 px-4 py-2 text-neutral-100 hover:text-neutral-300 rounded-md border-2 border-emerald-700 hover:border-emerald-800 focus:outline-none focus:border-emerald-800 cursor-not-allowed'>
            Perguruan Tinggi
          </button>
        </Link>
        <Link href='/prodi' className='w-full'>
          <button
            type='button'
            disabled
            className='w-full sm:w-72 px-4 py-2 text-neutral-100 hover:text-neutral-300 rounded-md border-2 border-emerald-700 hover:border-emerald-800 focus:outline-none focus:border-emerald-800 cursor-not-allowed'>
            Program Studi
          </button>
        </Link>
      </div>
      <footer
        className='
        text-zinc-200 text-md mt-40
      '>
        By{' '}
        <a
          href='https://andhikadk.my.id'
          target='_blank'
          className='font-medium hover:text-emerald-500'>
          Andhika Dwi Khalisyahputra
        </a>
      </footer>
    </main>
  );
}
