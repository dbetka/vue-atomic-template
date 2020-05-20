import { request } from 'utils/request';
import { ErrorMessage } from 'utils/error-message';
import { ERRORS } from 'utils/macros/errors';
import { logical } from 'utils/logical';

function catchConnectionError (reject) {
  return function (fetchError) {
    reject(new ErrorMessage(fetchError));
  };
}

function hasError (data) {
  return logical.isNull(data.error);
}

export const realApi = {
  signIn ({ user, password }) {
    return new Promise((resolve, reject) => {
      request.post({
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
