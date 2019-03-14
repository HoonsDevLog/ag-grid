/*
* Defines hooks for frameworks to override certain functionality
* */
export interface IFrameworkOverrides {
    /** Because Angular 2+ uses Zones, you should not use setTimeout(). So to get around this, we allow the framework
     * to specify how to execute setTimeout. The default is to just call the browser setTimeout(). */
    setTimeout(action: any, timeout?: any): void;

    processEventListenerFunc(event: string, addListenerFunc: () => void) : void;
}