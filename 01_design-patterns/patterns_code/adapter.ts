// The target defines the domain-specific interface used by the client code
class Target {
    public request(): string {
      return "Target: The default target's behaviour";
    }
  }
  
  // The Adaptee contains some useful behaviour but its interface is
  // imcompatible with the existing client code. The Adaptee needs some adaptation
  // before the client code can use it.
  class Adaptee {
      public specificRequest() : string {
          return ".eetPada eht to roicaheb laicepS"
      }
  }
  
  class Adapter extends Target {
      private adaptee: Adaptee
  
      constructor(adaptee: Adaptee) {
          super()
          this.adaptee = adaptee
      }
  
      public request(): string {
          const result = this.adaptee.specificRequest().split("").reverse().join("")
          return `Adapter: (Translated) ${result}`
      }
  }
  
  
  // The client already supports all class that follow the Target interface
  function clientCode(target: Target) {
      console.log(target.request())
  }