import { wrapUsingAuth } from "../auth/auth.utils";

//the best way to do this is to use an interceptor.
// Fetch in defect havent got an interceptor and therefore use axios.
// can be possible to use an interceptor for fetch



export const getUserInfo = async () => {
    const r = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, wrapUsingAuth());
    console.log(r);

}