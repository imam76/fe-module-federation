import { MantineProvider } from "@mantine/core"
import { ReactNode } from "react";
import theme from "../../styles/theme"
import '@mantine/core/styles.css';
type Props = {
  children: ReactNode
}

const ZhrUiProvider = ({ children }: Props) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}

export default ZhrUiProvider;