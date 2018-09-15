import * as $ from 'jquery'
const signIn = async (credentials) => {
    console.log(credentials);
    
    try {
        let userData = await $.ajax({
            url: '/users/login',
            data: credentials,
            dataType: "json",
            method: 'post'
        })
        return userData
    } catch (error) {
        console.log(error)
    }
}

export {signIn}