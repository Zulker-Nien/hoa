import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  
  required = false;

  setRequired = () => {
    this.required = true;
    console.log(this.required)
  };

}
export default createContext(new Store());