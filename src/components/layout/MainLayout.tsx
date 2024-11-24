import Navbar from "@components/ui/Navbar/Navbar"

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}