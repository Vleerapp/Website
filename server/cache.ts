class SimpleCache {
  constructor() {
    this.cache = {};
  }

  async get(key) {
    return this.cache[key];
  }

  async set(key, value) {
    this.cache[key] = value;
  }
}

export const cache = new SimpleCache();