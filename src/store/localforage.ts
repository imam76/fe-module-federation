import localforage from 'localforage';

// Initialize localforage
localforage.config({
  name: 'myApp',
  storeName: 'myStore'
});

// Create custom storage interface
interface Storage {
  getItem: (name: string) => Promise<any | null>;
  setItem: (name: string, value: any) => Promise<void>;
  removeItem: (name: string) => Promise<void>;
}

// Create custom storage object
const storage: Storage = {
  async getItem(name: string) {
    const value: any = await localforage.getItem(name);
    return value ? JSON.parse(value) : null;
  },

  async setItem(name: string, value: any) {
    await localforage.setItem(name, JSON.stringify(value));
  },

  async removeItem(name: string) {
    await localforage.removeItem(name);
  }
};

export default storage;