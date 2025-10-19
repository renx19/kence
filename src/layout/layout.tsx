// layout/Layout.tsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loading from "../components/loading";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
   const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Increase delay for smoother loading effect
    const timer = setTimeout(() => setLoading(false), 2000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar audioRef={audioRef} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
