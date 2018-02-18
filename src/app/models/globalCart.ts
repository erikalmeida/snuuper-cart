import { Injectable } from '@angular/core';
import {Item} from '../models/item'
@Injectable()
export class Globals {
 public cart: Item[] = [];
}