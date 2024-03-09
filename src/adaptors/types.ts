import { AnyObject } from "../types";

export interface IAdapter<T> {
  adaptTo(res: AnyObject): T;
  adaptFrom?(data: T): AnyObject;
}
