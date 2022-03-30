import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  
  division = ""
  mayor = ""
  phonenumber = ""


  setValue = (value) => {
    this.division = value;
    this.mayor = value;
    this.phonenumber = value;
  };

}
export default createContext(new Store());