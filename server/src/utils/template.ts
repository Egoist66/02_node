/**
 * Replace a pattern in a file with a string.
 * @param fileData The data from a file read using fs.readFile
 * @param pattern The pattern to replace
 * @param replacer The string to replace the pattern with
 * @returns {{value: string, template: Function}} The replaced string and the template function.
 */

export function t(fileData: any, pattern: RegExp, replacer: any) {

    const value = fileData.toString().replace(pattern, replacer);

    return () => {
        return {
            value,
            t: (pattern: RegExp, replacer: any) => t(value, pattern, replacer)()
        }
    }
    
   
}