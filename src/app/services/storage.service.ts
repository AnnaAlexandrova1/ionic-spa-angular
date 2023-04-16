import { Preferences } from '@capacitor/preferences';

export class StorageService {
  constructor() {}

  setBeer = async (id: string, value: string) => {
    await Preferences.set({
      key: id,
      value: value,
    });
  };

  getBeer = async (id: string) => {
    const { value } = await Preferences.get({key: id});
  };

  removeBeer = async (id: string) => {
    await Preferences.remove({ key: id });
  };
}
