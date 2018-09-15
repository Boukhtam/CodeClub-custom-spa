import * as $ from 'jquery'
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
            return [null, userData]
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