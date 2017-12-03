import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {

   // The current state of this side panel...
   // Subscribe to this if you want changes
  public state = new BehaviorSubject<boolean>(false);
  
    constructor() { }
  
    private panelState = false;
  
    /**
     * Used to toggle the state of the side menu... Unless the parameter is used.
     * @param {boolean} state - Optional, if used it will set the panel to the this state.
     * true (shown),  false (closed)
     */
    toggle(state?: boolean) {
      if (state !== null) {
        this.panelState = state;
      } else {
        this.panelState =  !this.panelState;      
      }
      this.state.next(this.panelState);
    }
}
