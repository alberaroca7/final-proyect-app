import { getUserInfo } from "./user.api";
import { useState, useEffect } from "react";


export const useUser = () => {
    const [user, updateUser] = useState<User | null>(null);

    useEffect(() => {
        getUserInfo()
            .then(u => updateUser)
    }, []);

    return user;

}

// aqui va todo el CRUD del usuario menos el crear que el usuario actual no lo tiene porque ya esta creado