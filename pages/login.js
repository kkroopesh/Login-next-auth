import { useSession } from "next-auth/client"

export default function Login() {
    const [session, loading] = useSession();
    if(loading) {
        return (<div>Loading...</div>)
    }
    return (
        <h1>{session ? `Welcome, ${session.user.name}` : "Please Login to Continue"}</h1>
    )
}