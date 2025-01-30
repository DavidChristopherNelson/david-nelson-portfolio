import { create } from 'zustand';

interface IsMobileScreenState {
  isMobileScreen: boolean;
  setIsMobileScreen: (isMobileScreen: boolean) => void;
}

export const useIsMobileScreenStore = create<IsMobileScreenState>((set) => ({
  isMobileScreen: false,
  setIsMobileScreen: (isMobileScreen) => set({ isMobileScreen }),
}));
