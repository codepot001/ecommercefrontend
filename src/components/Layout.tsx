import { Container, CssBaseline } from "@mui/material";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";


type LayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <CssBaseline />
      <Container>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </Container>
    </>
  )
}
