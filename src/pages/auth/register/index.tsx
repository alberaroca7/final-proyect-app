import { useAuth } from "../../../core/auth/auth.hook";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { IonButton, IonInput, IonPage, IonText } from "@ionic/react";
// import { UserRegister } from "../../../core/auth/auth.model";

const Register = () => {

    const { register, isAuth } = useAuth();
    const [showEmailComfirm, updateShowEmail] = useState(false);
    const history = useHistory();
    if (isAuth) history.push("/"); // if enter to the loggin register page, no 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const user = {
            // name: e.currentTarget.name.value,
            // surname: e.currentTarget.surname.value,
            // age: e.currentTarget.age.value,
            // height: e.currentTarget.height.value,
            // weight: e.currentTarget.weight.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.pass.value,

        };
        register(user).then(() => updateShowEmail(true));
    }

    return (

        <IonPage>
            {showEmailComfirm ? <IonText>Te hemos enviado un email, revisa tu bandeja para validarlo.</IonText> : ''}
            <form onSubmit={handleSubmit}>

                {/* <input type="text" placeholder="Introduzca su nombre" name="name" id="" ></input> */}
                {/* <input type="text" placeholder="Introduzca su apellido" name="surname" id="" ></input>
                            <input type="number" placeholder="Introduzca su edad" name="age" id="" ></input>
                            <input type="number" placeholder="Introduzca su altura en cm" name="height" id="" ></input>
                            <input type="number" placeholder="Introduzca su peso en kg" name="weight" id="" ></input> */}
                <IonInput name="email" type="email" placeholder="Introduzca email"></IonInput>
                <IonInput name="pass" type="password" placeholder="Introduzca password"></IonInput>
                <IonButton type="submit">Registrarse</IonButton>

            </form>
        </IonPage>
    )

}


export default Register;