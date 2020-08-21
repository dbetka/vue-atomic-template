import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { uCheck, uRequest } from '@dbetka/utils';

function catchConnectionError (reject) {
  return function (fetchError) {
    reject(new ErrorMessage(fetchError));
  };
}

function hasError (data) {
  return uCheck.isNull(data.error);
}

export const realApi = {
  signIn ({ user, password }) {
    return new Promise((resolve, reject) => {
      uRequest.post({
        url: '/user/login',
        data: {
          user,
          password,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (hasError(data)) {
            delete data.error;
            resolve(data);
          } else {
            reject(new ErrorMessage(ERRORS.signIn));
          }
        })
        .catch(catchConnectionError(reject));
    });
  },
};
