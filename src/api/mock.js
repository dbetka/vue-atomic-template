// import { ErrorMessage } from 'utils/error-message';
// import { ERRORS } from 'utils/macros/errors';

function makeDelayFakeAnswer (method = () => undefined, timeout = 100) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(method());
    }, timeout);
  });
}

// function makeDelayError (timeout = 100) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new ErrorMessage(ERRORS.fakeErrorInMockApi));
//     }, 1000);
//   });
// }

export const mockApi = {
  signIn ({ user, password }) {
    return makeDelayFakeAnswer(() => ({
      user,
    }), 500);
  },
};
