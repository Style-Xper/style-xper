import { PREFIX } from "../constants";

class IdGenerator {
  constructor() {}
  private count = 0;

  private generateCount = () => {
    this.count++;
    return this.count;
  };

  generateId = (name: string) => {
    const count = this.generateCount();
    return `${PREFIX}_${name}_${count}`;
  };
}

export default new IdGenerator();
