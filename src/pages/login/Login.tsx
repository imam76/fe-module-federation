import useAuthStore from '@store/authStore';
import { useNavigate } from 'react-router';

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Menandakan bahwa user sudah login
    navigate('/datastore'); // Redirect ke halaman yang dilindungi setelah login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;