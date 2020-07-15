import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
