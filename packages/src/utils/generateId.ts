class IdGenerator {
  constructor() {}
  private count = 0;
  private PREFIX = "SS";

  private generateCount = () => {
    this.count++;
    return this.count;
  };

  generateId = (name: string) => {
    const count = this.generateCount();
    return `${this.PREFIX}_${name}_${count}`;
  };
}

export default new IdGenerator();
