/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
// manipulate dom here
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
  // we can also expose variables, not just functions
})

window.addEventListener('DOMContentLoaded', () => {
  const row = document.getElementById('row2');
  const data = {
    username: 'Josh Wonder',
    id: 32342344,
    job: 'Navy Seal'
  }


  username = row.querySelectorAll('td')[0];
  id = row.querySelectorAll('td')[1];
  job = row.querySelectorAll('td')[2];

  username.innerText = data.username;
  id.innerText = data.id;
  job.innerText = data.job;
  
})
