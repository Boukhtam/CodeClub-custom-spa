
import {to, ReS, ReE} from './../services/utils.service'
import * as authService from './../services/auth.service'

const create = async (req, res) => {    
    res.setHeader('Content-Type', 'application/json');
    const userData = req.body;

    if (!userData.unique_key && !userData.email && !userData.phone){
        return ReE(res, 'Please enter an email or phone number to register.');
    } else if (!userData.password) {
        return ReE(res, 'Please entre a password');
    } else {
        let err, newUser;

        [err, newUser] = await to(authService.createUser(userData));
        if (err) return ReE(res, err, 422);

        ReS(res, {message:'Successfully created new user.', user: newUser.toWeb(), token: newUser.getJWT()}, 201)
    }
}

const registerInterstitial = async (req, res) => {};

const confirmEmail = async (req, res) => {};

const get = async (req, res) => {};

const update = async (req, res) => {};

const remove = async (req, res) => {};

const login = async (req, res) => {

    if (!req.user && req.info) {
        res.statusCode = 401;
        return res.json(req.info);
    };
    
    // res.statusCode = 200;
    return res.json({
        token: req.user.getJWT(),
        user: req.user.toWeb()
    });
};

export {
    create,
    registerInterstitial,
    confirmEmail,
    get,
    update,
    remove,
    login
}
