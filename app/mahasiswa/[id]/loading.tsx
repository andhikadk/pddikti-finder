const Loading = () => {
  return (
    <div className='flex justify-center items-center p-8 text-white'>
      <div className='flex flex-col gap-4 min-w-full md:min-w-[32rem]'>
        <h2 className='text-center'>Detail Mahasiswa</h2>
        <div className='flex flex-col gap-1 min-w-full animate-pulse'>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className='bg-neutral-700 rounded-md p-2 h-8'></div>
          ))}
        </div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loading;
