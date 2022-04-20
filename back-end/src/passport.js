const passport = require('passport');
require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const argon2 = require('argon2');
const User = require('../models/user.js')

passport.use(new LocalStrategy(async function verify(username, password, done) {
    try {
        const found =await User.findOne({email: username});
        if (found === null) {return done(null, false);}
        if (await argon2.verify(found.password, password)){
            return done(null, found);
        } else {
            return done(null, false);
        }
    } catch (error) {
        done(error, false)
    }
}));

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secret || 'secret',
}, async function (payload, done) {
    User.findById(payload.id, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
         } else {
             return done(null, false);
         }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});