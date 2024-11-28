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
          <Paper style={{ width: '500px', height: '680px', top: '400px', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }} radius="md" p="xl" withBorder >
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
                  placeholder="Email"
                  onChange={(event) => console.log(event.currentTarget.value)}
                  // error={form.errors.email}
                  radius="4px"
                />

                <PasswordInput
                  required
                  placeholder="Password"
                  onChange={(event) => console.log(event.currentTarget.value)}
                  // error={form.errors.password}
                  radius="4px"
                />

                <Button
                  type="submit"
                  radius="4px"
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
              c="#5D6D89"
                variant="default"
                radius="4px"
                style={{ backgroundColor: '#FFFFFF' }}
                leftSection={
                  <img
                    src="https://w7.pngwing.com/pngs/229/438/png-transparent-google-logo-adsense-google-adwords-history-company-text-logo-thumbnail.png"
                    width={20}
                    height={20}
                  />
                }
              >
                Login Dengan Google
              </Button>
            </Group>

            <Group justify="center" mt="md">
              <Text size="sm" c="#5D6D89">
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