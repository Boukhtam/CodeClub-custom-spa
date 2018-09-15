import $ from 'jquery'
import * as auth from './code.club.auth'
import {formToJson} from './code.club.utils'

const config = {
    layout: () => {
        return Handlebars.templates.shell
    },
    login: () => {
        return Handlebars.templates.login
    }
}

const state = {
    $wrapper: null
}

let jqueryMap = {}

const doSignIn = () => {
    jqueryMap.$login.toggle(500)
}

const doSignOut = () => {

}

const applySignIn = async (event) => {
    event.preventDefault()
    // let credentials = jqueryMap.$login.find('form').serialize()
    let credentials = formToJson(jqueryMap.$login.find('form')[0])
    
    let msg, user 
    [msg, user] = await auth.signIn(JSON.stringify(credentials))

    if (msg) {
        alert(msg)
    }

    if (user) {
        jqueryMap.$login.toggle(500);
        setUser(user.email || user.phone);
        setSignedIn(true)
    }
}

const setUser = () => {

}

const doHandleDocumentClick = (event) => {
    toggleOrHide(jqueryMap.$userMenuButton, jqueryMap.$user, event);
    toggleOrHide(jqueryMap.$mn1, jqueryMap.$mn1, event);
    toggleOrHide(jqueryMap.$mn2, jqueryMap.$mn2, event);

    handleAuthButtons(event);
}

const handleDesktopMenu = () => {}

const handlePhoneMenu = () => {}

const toggleOrHide = (el, elToToggle, e) => {
    if (el.is(e.target)) {
        elToToggle.toggleClass('shown');
    } else {
        elToToggle.removeClass('shown');
    }
}

const handleAuthButtons = (e) => {
    if (jqueryMap.$signInButton.is(e.target)) {
        doSignIn();
    } else if (jqueryMap.$signOutButton.is(e.target)) {
        doSignOut();
    }
}

const setJqueryMap = () => {
    const $wrapper = state.$wrapper
    const $header = jqueryMap.$header =  $wrapper.find('#cb-shell-header')
    
    const $login = $('<div id="cb-login"/>').html(config.login())
    $wrapper.append($login)
    
    jqueryMap = {
        $wrapper: $wrapper,
        $login: $login,
        $hamburgerMenu: $header.find('.icon-hamburger-menu'),
        $user: $header.find('.oauth'),
        $userMenuButton: $header.find('.signed-in'),
        $signInButton: $header.find('.sign-in'),
        $signOutButton: $header.find('.sign-out'),
        $mn1: $header.find('.spare_1'),
        $mn2: $header.find('.spare_2'),

        $submitSignIn: $login.find('.submit-btn'),
    }
}

const init = ($wrapper) => {
    state.$wrapper = $wrapper
    $wrapper.html(config.layout())

    setJqueryMap()

    $(window)
            .bind('click', doHandleDocumentClick);

    jqueryMap.$submitSignIn.bind('click', applySignIn);
}

export {init};