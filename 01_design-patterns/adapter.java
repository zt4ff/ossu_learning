// CoffeeMachineInterface.java

// new coffee machine interface
public interface CoffeeMachineInterface {
    public void chooseFirstSelection();

    public void chooseSecondSelection();
}

// OldCoffeeMachine.java

public class OldCoffeeMachine {
    public void selectA(){};
    public void selectB(){};
}

// CoffeeTouchscreenAdapter.java

public class CoffeeTouchscreenAdapter implements CoffeeMachineInterface {
    private OldCoffeeMachine oldCoffeeMachine;

    public CoffeeTouchscreenAdapter(OldCoffeeMachine  oldCoffeeMachine) {
        this.oldCoffeeMachine = oldCoffeeMachine;
    };

    public void chooseFirstSelection() {
        oldCoffeeMachine.selectA();
    }

    public void chooseSecondSelection() {
        oldCoffeeMachine.selectB();
    }

    public void selectA() {
        this.chooseFirstSelection();
    };

    public void selectB() {
        this.chooseSecondSelection();
    };
}
