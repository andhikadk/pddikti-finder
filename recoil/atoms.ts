import { atom } from 'recoil';

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const currentSearchState = atom({
  key: 'currentSearchState',
  default: '',
});
