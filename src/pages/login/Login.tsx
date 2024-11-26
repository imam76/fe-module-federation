import IconZahir from '@components/icon/Zahir';
import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Menu,
  Paper,
  PasswordInput,
  rem,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import useAuthStore from '@store/authStore';
import { ChevronDown, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();


  const handleLogin = () => {
    login(); // Menandakan bahwa user sudah login
    navigate('/datastore'); // Redirect ke halaman yang dilindungi setelah login
  };

  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container size={420} my={40}>
          <Paper radius="md" p="xl" withBorder>
            <Group justify="left" mb="lg">
              <IconZahir />
            </Group>

            <Title order={2} ta="center" mt="md" mb={8} c="#394D6F">
              {t('Login')}
            </Title>

            <Text c="dimmed" size="sm" ta="center" mb="xl">
              Login dengan Akun Zahir
            </Text>

            <form onSubmit={() => console.log('submit')}>
              <Stack>
                <TextInput
                  required
                  label="Email"
                  placeholder="Email"
                  onChange={(event) => console.log(event.currentTarget.value)}
                  // error={form.errors.email}
                  radius="md"
                  leftSection={<Mail size={16} />}
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  onChange={(event) => console.log(event.currentTarget.value)}
                  // error={form.errors.password}
                  radius="md"
                />

                <Button
                  type="submit"
                  radius="md"
                  fullWidth
                  style={{ backgroundColor: '#22c55e' }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
            </form>

            <Divider label="atau lanjutkan dengan" labelPosition="center" my="lg" />

            <Group grow mb="md" mt="md">
              <Button
                variant="default"
                radius="md"
                leftSection={
                  <svg width={rem(20)} height={rem(20)} viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.36 14.3c-.28.48-.71.86-1.21 1.11-.5.25-1.07.38-1.63.38-.56 0-1.13-.13-1.63-.38-.5-.25-.93-.63-1.21-1.11-.28-.48-.43-1.02-.43-1.57 0-.55.15-1.09.43-1.57.28-.48.71-.86 1.21-1.11.5-.25 1.07-.38 1.63-.38.56 0 1.13.13 1.63.38.5.25.93.63 1.21 1.11.28.48.43 1.02.43 1.57 0 .55-.15 1.09-.43 1.57zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                    />
                  </svg>
                }
              >
                Login Dengan Google
              </Button>
            </Group>

            <Group justify="center" mt="md">
              <Text size="sm">
                Tidak punya akun?{' '}
                <Anchor size="sm" component="button" c="#0EA5E9">
                  Daftar
                </Anchor>
              </Text>
            </Group>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Login;