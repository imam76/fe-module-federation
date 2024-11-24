
import MainLayout from "@components/layout/MainLayout";
import useAuthStore from "@store/authStore";
import { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Jika user belum login, arahkan ke halaman login
  return isAuthenticated ? (
    <>
      <MainLayout>
        {children}
      </MainLayout>
    </> // Akses halaman yang dilindungi
  ) : (
    <Navigate to="/login" /> // Arahkan ke login jika belum autentikasi
  );
};

export default ProtectedRoute;