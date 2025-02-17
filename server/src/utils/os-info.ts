import os from 'node:os'


/**
 * Returns an object with information about the current node.js process's operating system.
 * @param {typeof import('node:os')} OS - The `os` module, imported from 'node:os'.
 * @returns {Object} An object with the following properties:
 *   - platform: {string} The operating system platform.
 *   - release: {string} The operating system release.
 *   - arch: {string} The operating system architecture.
 *   - cpus: {Array<Object>} The CPUs on the machine, with model, speed, and times properties.
 *   - totalmem: {number} The total amount of memory on the system in bytes.
 *   - freemem: {number} The amount of free memory on the system in bytes.
 *   - networkInterfaces: {Object} A dictionary of network interfaces, with keys the interface names and values objects with mac, internal, netmask, and family properties.
 *   - homedir: {string} The current user's home directory.
 *   - tmpdir: {string} The default directory for temporary files.
 *   - EOL: {string} The end-of-line marker.
 *   - type: {string} The operating system name.
 *   - version: {string} The operating system version.
 *   - uptime: {number} The number of seconds the computer has been up.
 *   - userInfo: {Object} An object with the username, uid, gid, homedir, and shell properties.
 */
export function getOsData(OS: typeof os) {
  return {
    platform: OS.platform(),
    release: OS.release(),
    arch: OS.arch(),
    cpus: OS.cpus(),
    totalmem: OS.totalmem(),
    freemem: OS.freemem(),
    networkInterfaces: OS.networkInterfaces(),
    homedir: OS.homedir(),
    tmpdir: OS.tmpdir(),
    EOL: OS.EOL,
    type: OS.type(),
    version: OS.version(),
    uptime: OS.uptime(),
    userInfo: OS.userInfo(),
  }
}