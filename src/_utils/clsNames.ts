export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

function toVal(mix: any) {
  let str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (const i of mix) {
        const val = toVal(i);
        if (val) {
          str && (str += " ");
          str += val;
        }
      }
    } else {
      const keys = Object.keys(mix);
      for (const k of keys) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}

export function clsNames(...args: ClassValue[]) {
  let x;
  let str = "";
  for (const tmp of args) {
    if ((x = toVal(tmp))) {
      str && (str += " ");
      str += x;
    }
  }
  return str;
}
