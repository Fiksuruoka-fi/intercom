import { WebPlugin } from '@capacitor/core';

import type {
  IntercomPlugin,
  LogEventOptions,
  RegisterIdentifiedUserOptions,
  SetBottomPaddingOptions,
  SetUserHashOptions,
  UserUpdateOptions,
} from './definitions';

export class IntercomWeb extends WebPlugin implements IntercomPlugin {
  async registerIdentifiedUser(
    _options: RegisterIdentifiedUserOptions,
  ): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async registerUnidentifiedUser(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async updateUser(_options: UserUpdateOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async logout(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async logEvent(_options: LogEventOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayMessenger(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayMessageComposer(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayHelpCenter(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideMessenger(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayLauncher(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideLauncher(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayInAppMessages(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideInAppMessages(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async setUserHash(_options: SetUserHashOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async setBottomPadding(_options: SetBottomPaddingOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
