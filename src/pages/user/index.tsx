import { useUser } from "../../core/users/user.hook";


function User() {
    const { user } = useUser();

    return(
        <div>
            <h1>User</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    )

}

export default User;
