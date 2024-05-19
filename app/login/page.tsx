import NavBar from "../ui/navigation/navbar";
import LoginForm from "../ui/login-form";

export default function Page() {
    return (
    <div>
    <NavBar />
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500/50 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center flex-grow w-full">
            <LoginForm />
        </div>
    </div>
    </div>
    ) ;
}