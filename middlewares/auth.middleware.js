import passport from 'passport'

const authenticateLocal = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);

        if (!user) {
            req.info = info;
            return next();
        }

        req.logIn(user, (err) => {
            if (err) return next(err);
            return next();
        });
    })(req, res, next);
};

const ensureAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
	    return next();
	} else {
        
	}
};

export {
    authenticateLocal,
    ensureAuthenticated
}