// import { Link, Route, Routes } from 'react-router'

type LayoutProps = {
  children?: React.ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  )
}

export default MainLayout