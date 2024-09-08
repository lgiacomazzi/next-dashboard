import Footer from '@/components/footer';
import Header from '@/components/header/header';

export default function CategoryPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
