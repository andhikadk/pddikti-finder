import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';

const getDetailMahasiswa = async (id: string) => {
  const res = await axios.get(`${process.env.BASE_URL}/detail_mhs/${id}`);
  return res.data;
};

const convertYearString = (yearString: string) => {
  const year = parseInt(yearString.slice(0, -1));
  const lastDigit = parseInt(yearString.slice(-1));
  const isOdd = lastDigit % 2 === 1;

  return `${isOdd ? 'Ganjil' : 'Genap'} ${year}`;
};

const formatDate = (dateString: string) => {
  if (!dateString) {
    return 'Tidak diketahui';
  }
  const date = new Date(dateString);

  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const DetailMahasiswa = async ({ params }: { params: { id: string } }) => {
  const { datastatuskuliah, datastudi, dataumum } = await getDetailMahasiswa(
    params.id
  );

  const keys = Object.keys(dataumum);
  console.log(dataumum);

  return (
    <div className='flex justify-center items-center p-8 text-white'>
      {/* <div>
        {keys.map((key, index) => (
          <p key={index}>
            {key}: {dataumum[key]}
          </p>
        ))}
      </div> */}
      <div className='flex flex-col gap-4 min-w-full md:min-w-[32rem]'>
        <h2 className='text-center'>Detail Mahasiswa</h2>
        <div className='flex flex-col gap-1 min-w-full'>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            <p>{dataumum.nm_pd}</p>
          </div>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            <p>{dataumum.jk === 'L' ? 'Laki-Laki' : 'Perempuan'}</p>
          </div>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            <p>{dataumum.nipd}</p>
          </div>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            <Link href={dataumum.link_pt}>
              <p className='text-emerald-400 hover:text-emerald-600 cursor-pointer'>
                {dataumum.namapt}
              </p>
            </Link>
          </div>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            <Link href={dataumum.link_prodi}>
              <p className='text-emerald-400 hover:text-emerald-600 cursor-pointer'>
                {dataumum.namajenjang} - {dataumum.namaprodi}
              </p>
            </Link>
          </div>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            <p>{convertYearString(dataumum.mulai_smt)}</p>
          </div>
          <div className='bg-neutral-700 rounded-md px-4 py-2'>
            {dataumum.nm_jns_daftar}
          </div>
          <div
            className={clsx(
              dataumum.ket_keluar === 'Lulus'
                ? 'bg-emerald-700'
                : dataumum.ket_keluar === 'Dikeluarkan'
                ? 'bg-rose-700'
                : dataumum.ket_keluar === 'Mutasi'
                ? 'bg-yellow-700'
                : dataumum.ket_keluar === 'Mengundurkan diri'
                ? 'bg-yellow-700'
                : 'bg-neutral-700',
              'rounded-md px-4 py-2'
            )}>
            <p>
              {dataumum.ket_keluar
                ? `${dataumum.ket_keluar} - ${formatDate(dataumum.tgl_keluar)}`
                : 'Belum Lulus'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMahasiswa;
