import {Imprimivel} from "../utils/imprimivel.js";
import {Comparavel} from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T>{
}

// In TS, a class can extends just one class
// Does not exists multiple heritage in TS between classes
// But an interface can extends multiples interfaces
//
