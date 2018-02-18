import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

import { Item } from "../models/item";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams
} from "@angular/http";
import { Subject } from "rxjs/Subject";
import { EventEmitter } from "events";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class CartService {
  private messageSource = new BehaviorSubject<Item[]>(new Array<Item>());
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: Item[]) {
    this.messageSource.next(message);
    console.log("AL");
    console.log(this.messageSource);
  }
}
