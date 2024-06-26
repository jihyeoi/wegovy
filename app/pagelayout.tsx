import NavBar from "./ui/navigation/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
      <NavBar />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500/50 flex min-h-screen flex-col items-center justify-between p-24">
          <div className="flex flex-col items-center justify-center flex-grow w-full">
          {children}
          </div>
      </div>
      </div>
    );
  }