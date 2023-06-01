// The goal of this method is to simulate the immersive mode of the flagship app.
// So we add the flagship-app class to the body and we set 2 css variables:
// flagship-top-height
// flagship-bottom-height
export const addFlagshipElements = () => {
  const root = document.getElementsByTagName('body')[0]
  root.style.setProperty('--flagship-top-height', '40px')
  root.style.setProperty('--flagship-bottom-height', '40px')
  root.classList.add('flagship-app')

  const statusBarDiv = document.createElement('div')
  statusBarDiv.setAttribute('id', 'flagshipStatusBar')
  statusBarDiv.style.cssText =
    'position:fixed;top:0;height:40px;z-index:10000000;background-color:red;width:100%;display:flex;align-items:center;justify-content:center'
  // and give it some content
  const statusBarDivContent = document.createTextNode(
    'Top Status Bar with clock'
  )

  // add the text node to the newly created div
  statusBarDiv.appendChild(statusBarDivContent)

  const bottomBarDiv = document.createElement('div')
  bottomBarDiv.setAttribute('id', 'flagshipBottomBar')
  bottomBarDiv.style.cssText =
    'position:fixed;bottom:0;height:40px;z-index:10000000;background-color:red;width:100%;display:flex;align-items:center;justify-content:center'
  // and give it some content
  const bottomBarDivContent = document.createTextNode('Bottom Bar')

  // add the text node to the newly created div
  bottomBarDiv.appendChild(bottomBarDivContent)

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('rsg-root')
  document.body.insertBefore(statusBarDiv, currentDiv)
  document.body.insertBefore(bottomBarDiv, currentDiv)
}

export const removeFlagshipElements = () => {
  const root = document.getElementsByTagName('body')[0]
  root.style.removeProperty('--flagship-top-height')
  root.style.removeProperty('--flagship-bottom-height')
  root.classList.remove('flagship-app')

  document.getElementById('flagshipStatusBar')?.remove()
  document.getElementById('flagshipBottomBar')?.remove()
}
