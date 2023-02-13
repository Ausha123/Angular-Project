import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public mainSpinnerLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public mainBarLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public mainButtonLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
