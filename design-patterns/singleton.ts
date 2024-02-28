class ExampleSingleton {
  // create only one unique instance of the class
  private static uniqueInstance: ExampleSingleton;
  private foo: string;

  private constructor(name: string) {
    this.foo = name;
  }

  public static getInstance() {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new ExampleSingleton("kayode");
      console.log("creating an instance")
    }

    return this.getInstance;
  }

  public static changeName(foo: string) {
    this.uniqueInstance.foo = foo;
  }
}


const i1 = ExampleSingleton.getInstance()
