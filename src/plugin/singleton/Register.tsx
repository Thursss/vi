class Register {
  items: {
    [key: string]: any;
  };
  constructor() {
    this.items = {};
  }
  register<T>(key: string, value: T) {
    this.items[key] = value;
    return this;
  }
  has(key: string): boolean {
    const item = this.items[key];
    return item !== null && item !== undefined;
  }
  keys(): string[] {
    return Object.keys(this.items);
  }
  get<T>(key: string) {
    return this.items[key] as T;
  }
  clear() {
    this.items = {};
    return this;
  }
  remove(key: string) {
    if (!this.has(key)) return;
    delete this.items[key];
    return this;
  }
}

export default Register;
