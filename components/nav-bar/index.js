import { useSession, signIn, signOut } from "next-auth/client"
import styles from './nav-bar.module.css';

export default function Login() {
    const [session, loading] = useSession();
    console.log({session, loading})
    if(loading) {
        return(<div>Loading...</div>)
    }
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbarContentWrap}>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div className={styles.navbarMenuWrap}>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact Us</div>
                    <div onClick={() => session ? signOut() : signIn()}>{session ? 'Logout' : 'Login'}</div>
                    {/* <div onClick={() => session ? signout() : signin()}>{session ? 'Logout' : 'Login'}</div> */}
                </div>
            </div>
        </div>
    )
}