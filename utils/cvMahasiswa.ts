export const cvMahasiswa = (
  mahasiswa: [{ text: string; ['website-link']: string }]
) => {
  const regex = /(.+)\((.+)\), PT : (.+), Prodi: (.+)/;
  const objs = mahasiswa.map(
    (item: { text: string; ['website-link']: string }) => {
      const match = item.text.match(regex);
      if (match) {
        const [_, name, nim, pt, prodi] = match;
        return {
          name: name.trim(),
          nim: nim.trim(),
          pt: pt.trim(),
          prodi: prodi.trim(),
          link: item['website-link'],
        };
      }
      return null;
    }
  );
  return objs;
};
