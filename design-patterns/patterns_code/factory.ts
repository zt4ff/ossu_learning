type burgerName = "chicken" | "beef" | "veggies";

abstract class Burger {
  public doughType: string;

  constructor() {
    this.doughType = "flour";
  }

  public bakeBurger() {
    // bake burger for 10mins
  }
}

class BeefBurger extends Burger {
  private beef: string;
  constructor() {
    super();
    this.beef = "ham";
  }
}

class ChickenBurger extends Burger {
  private chicken: string;
  constructor() {
    super();
    this.chicken = "wings";
  }
}

class VeggiesBurger extends Burger {
  private veggies: string;
  constructor() {
    super();
    this.veggies = "brocoli,spinach";
  }
}

abstract class Kitchen {
  public abstract createBurger: (burgerName: burgerName) => Burger

  public orderBurger(burgerName: burgerName) {
    const burger = this.createBurger(burgerName);
    burger?.bakeBurger();
  }
}

class EkitiRestarant extends Kitchen {
  // create the factory method
  public createBurger = (burgerName: burgerName) => {
    let burger: Burger | null = null;
    if (burgerName === "beef") {
      burger = new BeefBurger();
    } else if (burgerName === "chicken") {
      burger = new ChickenBurger();
    } else if (burgerName === "veggies") {
      burger = new VeggiesBurger();
    }
    return burger as Burger
  }
}

class SimpleBurgerFactory {
  public createBurger(burgerName: burgerName) {
    let burger: Burger | null = null;
    if (burgerName === "beef") {
      burger = new BeefBurger();
    } else if (burgerName === "chicken") {
      burger = new ChickenBurger();
    } else if (burgerName === "veggies") {
      burger = new VeggiesBurger();
    }
    return burger;
  }
}
