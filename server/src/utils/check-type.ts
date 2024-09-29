/**
 * Checks if value is an instance of type. If type is not provided, it will be set to the constructor function.
 * If value is null, it will return { msg: "Type Null does not have parent prototype" }.
 * If value is an array, it will return { type: "array", isValid: true }.
 * Otherwise, it will return { type: typeof value, subType: getObjectType(value), isValid: true }.
 * If value is not an instance of type, it will throw a TypeError.
 * @param {*} [value=null] The value to be checked.
 * @param {function} [type=function() {}] The type to be checked against.
 * @throws TypeError
 * @return {object} An object with two properties: type and isValid. If type is null, it will return { msg: "Type Null does not have parent prototype" }.
 */
export function checkType(value = null, type = function () {}) {

    const getObjectType = (obj: any)  => {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }
  
  
    if (typeof type === "function") {
      if (value === null) {
        return { msg: "Type Null does not have parent prototype" };
      }
  
      if (value.__proto__  === type.prototype) {
        if (Array.isArray(value)) {
          return { type: "array", isValid: true };
        }
        return { type: typeof value, subType: getObjectType(value), isValid: true };
      } else {
        throw new Error("Type validation error!");
      }
    }
}