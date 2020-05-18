import { IErr } from '../entity/Err';

export enum Err {
  ReCaptchaNotReady = 'reCaptchaNotReady',
  InvalidReCaptchaSiteKey = 'invalidReCaptchaSiteKey',
  MaliciousContent = 'maliciousContent',
  AliasAlreadyExist = 'aliasAlreadyExist',
  AliasInvalid = 'invalidCustomAlias',
  AliasWithFragment = 'aliasWithFragment',
  UserNotHuman = 'requesterNotHuman',
  Unauthenticated = 'invalidAuthToken',
  NetworkError = 'networkError',
  Unknown = 'unknownError'
}

const unknownErr = {
  name: 'Unknown error',
  description: `
                I am not aware of this error. 
                Please email byliuyang11@gmail.com the screenshots and detailed 
                steps to reproduce it so that I can investigate.
                `
};

const invalidReCaptchaSiteKeyErr = {
  name: 'Invalid reCaptcha site key',
  description: `
                Please email byliuyang11@gmail.com the screenshots and detailed steps to 
                reproduce it so that I can investigate.
                `
};

const aliasNotAvailableErr = {
  name: 'Alias not available',
  description: `
                The alias you chose is not available. Please choose a different 
                alias, or leave alias field empty to automatically generate one.
                `
};

const aliasInvalidErr = {
  name: 'Alias is invalid',
  description: `
                The alias you chose is invalid. Please choose a different 
                alias, or leave alias field empty to automatically generate one.
                `
};

const aliasWithFragment = {
  name: 'Alias contains fragment character',
  description: `
                The alias you chose contains the URL fragment character ('#') which is not allowed
                in an alias. Please remove this character and try again.
                `
}

const maliciousContentErr = {
  name: 'Malicious Content Detected',
  description: `
                The input you provided contains malicious content. Please remove
                them and try again.
                `
};

const userNotHumanErr = {
  name: 'User not human',
  description: `
                The algorithm believes you are an automated script instead of a
                human user. Please email byliuyang11@gmail.com if this is a
                mistake.
                `
};

const networkErr = {
  name: 'Network error',
  description: `
              Unable to reach the server. Please double check your Internet connection and try again.
              If this happens consistently, please email byliuyang11@gmail.com with screenshots and the necessary steps to reproduce the error.
              `
};

export class ErrorService {
  getErr(errCode: Err): IErr {
    switch (errCode) {
      case Err.AliasAlreadyExist:
        return aliasNotAvailableErr;
      case Err.AliasInvalid:
        return aliasInvalidErr;
      case Err.AliasWithFragment:
        return aliasWithFragment;
      case Err.UserNotHuman:
        return userNotHumanErr;
      case Err.NetworkError:
        return networkErr;
      case Err.InvalidReCaptchaSiteKey:
        return invalidReCaptchaSiteKeyErr;
      case Err.MaliciousContent:
        return maliciousContentErr;
      case Err.Unknown:
      default:
        return unknownErr;
    }
  }
}
