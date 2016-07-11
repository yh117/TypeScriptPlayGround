export type Callback = (...args: any[]) => void

class Registry {
  [event: string]: Array<Callback>
}

let registry: Registry = new Registry;

export function pub(event: string, ...args: any[]) {
  if (registry[event]) {
    registry[event].forEach( callback => callback.apply(null, args) )
  }
}

export function sub(event: string, callback: Callback) {
  if (registry[event]) {
    registry[event].push(callback);
  }
  else {
    registry[event] = [callback];
  }
}