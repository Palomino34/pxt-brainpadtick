namespace pxsim {

    export class LedState {
        private on: boolean;
		
        setState(on: boolean) {
            this.on = on;        
        }

        getState(): boolean {
            return this.on;
        }
    }
}


namespace pxsim.led {
    export function __setLed(on: boolean): void {
       const led = (board() as DalBoard).ledState;
        led.setState(on);
        runtime.queueDisplayUpdate();
    }
}