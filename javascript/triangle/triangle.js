export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  countSides() {
    // For each side, increment its current count or create a new object property if it doesn't exist yet.
    let count = {};
    this.sides.forEach((side) => (count[side] = (count[side] || 0) + 1));
    return count;
  }

  triangleInequality() {
    /*
    Check all sides for triangle inequality.
    https://byjus.com/maths/triangle-inequality-theorem/
    */

    if (
      this.sides[0] > this.sides[1] + this.sides[2] ||
      this.sides[1] > this.sides[0] + this.sides[2] ||
      this.sides[2] > this.sides[0] + this.sides[1]
    ) {
      return true;
    } else {
      return false;
    }
  }

  get isEquilateral() {
    // Return true if all sides are equal
    return this.sides.every(
      (side, index, array) => side === array[0] && side > 0
    );
  }

  get isIsosceles() {
    if (this.triangleInequality()) {
      return false;
    }

    let sides = this.countSides();

    return (
      Object.values(sides).length === 2 ||
      Object.values(sides).some((side) => side >= 2)
    );
  }

  get isScalene() {
    if (this.triangleInequality()) {
      return false;
    }

    let sides = this.countSides();

    return Object.values(sides).length === 3;
  }
}
