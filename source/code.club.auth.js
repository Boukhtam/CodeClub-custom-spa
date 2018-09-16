import * as $ from 'jquery'

const config = {
    TOKEN_STORAGE_NAME: 'code.club.auth'
}

const state = {
    token: null,
    user: null,
}

const signIn = async (credentials) => {
    
    try {
        let response = await fetch('/users/login', {
            method: "post",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json"
            },
            credentials: "include",
            body: credentials,
        })
        if (response.status === 200) {
            let userData = await response.json()

            let token = userData.token;
            state.token = token;
            state.user = userData.user;

            localStorage.setItem(config.TOKEN_STORAGE_NAME, JSON.stringify(token));

            return [null, state.user]
        }

        let {message} = await response.json()
        return [message]
        
    } catch (error) {
        console.log('error: ', error);
        let msg = 'Something went wrong, please tryout later..'
        return [msg]
    }
}

export {signIn}