import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, LOCAL_LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";


export default () => {
    const [action, setAction] = useState("login");
    const email = useInput("");
    const password = useInput("");

    const [loginMutation] = useMutation(LOG_IN, {
        variables: {
            email: email.value,
            password: password.value
        }
    });

    const [localLoginMutation] = useMutation(LOCAL_LOG_IN);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (action === "login") {
            try {
                const { data: { login: token } } = await loginMutation();
                if (token !== "" && token !== undefined) {
                    localLoginMutation({ variables: { token } });
                }
                else {
                    throw Error();
                }
            }
            catch{
                toast.error("Can't log in");
            }
        }

    }

    return (
        <AuthPresenter
            setAction={setAction}
            action={action}
            email={email}
            password={password}
            onSubmit={onSubmit}
        />
    );
};