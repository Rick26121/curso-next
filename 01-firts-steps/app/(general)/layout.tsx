import { Navbar } from "@/components";



export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar></Navbar>
    <div>
      <h1>Hello Root Layout About</h1>
      {children}
    </div>
    </>
  );
}