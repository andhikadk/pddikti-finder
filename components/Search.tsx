'use client';

import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms';

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    setSearch(target.search.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-wrap items-center justify-center w-full sm:w-[32rem] mt-8 gap-2'>
      <input
        type='text'
        name='search'
        className='w-full sm:w-96 px-4 py-2 text-neutral-100 bg-neutral-700 border border-neutral-700 rounded-md focus:outline-none focus:border-neutral-500'
        placeholder='Search by [Name or NIM] min 5 characters'
        required
        minLength={5}
      />
      <button
        type='submit'
        className='w-full sm:w-fit px-4 py-2 text-neutral-100 bg-emerald-700 rounded-md hover:bg-emerald-800 border border-emerald-700 hover:border-emerald-800 focus:outline-none focus:bg-emerald-800 focus:border-emerald-800'>
        Search
      </button>
    </form>
  );
};

export default Search;
