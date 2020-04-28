import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, LOCAL_LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, UNLOCK_USER, REQUEST_SECRET } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
    const [action, setAction] = useState("login");
    const email = useInput("");
    const password = useInput("");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const secret = useInput("");

    const [loginMutation] = useMutation(LOG_IN, {
        variables: {
            email: email.value,
            password: password.value
        }
    });

    const [localLoginMutation] = useMutation(LOCAL_LOG_IN);

    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            username: username.value
        }
    });

    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
        variables: {
            email: email.value,
            secret: secret.value
        }
    });

    const [unlockUserMutation] = useMutation(UNLOCK_USER, {
        variables: {
            email: email.value
        }
    });

    const [requestSecretMutation] = useMutation(REQUEST_SECRET, {
        variables: {
            email: email.value
        }
    });

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
        else if (action === "signUp" || action === "confirm") {
            if (email.value !== "" && password.value !== "" && username !== "") {
                if (action === "confirm") {
                    if (secret.value !== "") {
                        try {
                            const { data: { isConfirmed } } = await confirmSecretMutation(); {
                                if (isConfirmed) {
                                    try {
                                        await unlockUserMutation();
                                        setAction("login");
                                    }
                                    catch{
                                        throw Error();
                                    }
                                }
                            }
                        }
                        catch{
                            throw Error();
                        }
                    }
                }
                else if (action === "signUp") {
                    try {
                        const { data: { createAccount } } = await createAccountMutation();
                        if (!createAccount) {
                            toast.error("Can't create account");
                        }
                        else {
                            setAction("confirm");
                            try {
                                await requestSecretMutation();
                            }
                            catch{
                                throw Error();
                            }
                        }
                    }
                    catch (e) {
                        toast.error(e.message);
                    }
                }
            }
            else {
                toast.error("All field are required!");
            }
        }
    }

    const toSignUp = () => {
        setAction("signUp");
    };

    return (
        <AuthPresenter
            setAction={setAction}
            action={action}
            email={email}
            password={password}
            onSubmit={onSubmit}
            toSignUp={toSignUp}
            username={username}
            secret={secret}
            firstName={firstName}
            lastName={lastName}
        />
    );
};