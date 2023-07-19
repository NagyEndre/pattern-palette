class RoundHole {
  constructor(private radius: number) {}

  public fits(peg: RoundPeg): boolean {
    return this.radius > peg.getRadius();
  }
}

class RoundPeg {
  constructor(private radius: number) {}

  public getRadius(): number {
    return this.radius;
  }
}

class SquarePegAdapter extends RoundPeg {
  constructor(private peg: SquarePeg) {
    super((peg.getWidth() * Math.sqrt(2)) / 2);
  }
}

class SquarePeg {
  constructor(private width: number) {}

  public getWidth(): number {
    return this.width;
  }
}

const hole = new RoundHole(2);
const squarePeg = new SquarePeg(2);
const adapter = new SquarePegAdapter(squarePeg);

hole.fits(adapter);
