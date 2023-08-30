const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

class AuthenticationError extends GraphQLError {
  constructor(message) {
    super(message, undefined, undefined, undefined, undefined, undefined, {
      code: 'UNAUTHENTICATED',
    });
  }
}

module.exports = {
  AuthenticationError: AuthenticationError,
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.error(err);
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, firstname, lastName, area, _id }) {
    const payload = { email, firstname, lastName, area, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
