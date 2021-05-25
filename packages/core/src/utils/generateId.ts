import { PREFIX, ELEMENTS } from "../constants";

class IdGenerator {
  constructor() {}
  private count = 0;

  private generateCount = () => {
    this.count++;
    return this.count;
  };

  generateId = (name: string) => {
    if (ELEMENTS.includes(name)) {
      return `${name}`;
    }
    const count = this.generateCount();
    return `${PREFIX}_${name}_${count}`;
  };
}

export default new IdGenerator();
