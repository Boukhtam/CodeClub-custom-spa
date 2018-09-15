import * as $ from 'jquery'
const signIn = async (credentials) => {
    
    try {
        // let userData = await $.ajax({
        //     url: '/users/login',
        //     data: credentials,
        //     dataType: "json",
        //     method: 'post'
        // })
        let userData = await fetch('/users/login', {
            method: "post",
            headers: {
                "Accept": "Application/json",
            },
            credentials: "include",
            body: credentials,
        })
        console.log(userData)
        return userData
    } catch (error) {
        console.log(error)
    }
}

export {signIn}