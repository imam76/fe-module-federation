// src/stores/authStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware';


interface AuthStore {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Menggunakan middleware `persist` agar state tetap ada di localStorage
const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth',
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated }),
    }
  )
);

export default useAuthStore;


