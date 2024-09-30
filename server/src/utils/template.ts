
/**
 * Replace the first occurrence of a pattern in a given fileData with a replacer.
 *
 * @param {any} fileData - The file data to be processed.
 * @param {RegExp} pattern - The pattern to be replaced.
 * @param {any} replacer - The replacer to be used.
 * @returns {Function} - A function that returns an object with two properties: value and t. The value property is the processed fileData and the t property is a function that can be used to perform another replacement on the processed fileData.
 * @example
 * const fileData = "Hello {name}!"
 * const processed = t(fileData, /\{name\}/, 'John');
 * const result = processed().value; // result is 'Hello John!'
 * const anotherResult = processed().t(/\{name\}/, 'Jane').value; // anotherResult is 'Hello Jane!'
 */
export function t(fileData: any, pattern: RegExp, replacer: any): () => { value: string; t: Function } {

    const value = fileData.toString().replace(pattern, replacer);

    return () => {
        return {
            value,
            t: (pattern: RegExp, replacer: any) => t(value, pattern, replacer)()
        }
    }
    
   
}


