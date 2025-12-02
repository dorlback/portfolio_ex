import { logout } from "@/lib/action";

export default function LogoutButton() {
    // const logout = async () => {
    //     await supabase.auth.signOut();
    //     alert("로그아웃");
    //     window.location.href = "/";
    // };

    return <button onClick={logout}>Logout</button>;
}
