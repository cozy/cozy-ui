// eslint-disable-next-line no-unused-vars
import { FlagshipUI } from './useSetFlagshipUI'
import { getFlagshipMetadata as getFlagshipMetadataFromDeviceHelper } from 'cozy-device-helper'

/**
 * The goal of this method is to simulate the immersive mode of the flagship app.
 * So we add the flagship-app class to the body and we set css variables:
 * If the "contained" mode is activated, it simulates an classic app behavior
 * If the "immersive" mode is activated, it simulates a fullscreen app like Home
 */
export const addFlagshipElements = () => {
  const root = document.getElementsByTagName('body')[0]
  root.style.setProperty('--flagship-top-height', '40px')
  root.style.setProperty('--flagship-top-bgcolor', 'white') // used only for cozy-ui docs
  root.style.setProperty('--flagship-top-overlay', 'transparent') // used only for cozy-ui docs
  root.style.setProperty('--flagship-top-color', 'black') // used only for cozy-ui docs
  root.style.setProperty('--flagship-bottom-height', '40px')
  root.style.setProperty('--flagship-bottom-bgcolor', 'white') // used only for cozy-ui docs
  root.style.setProperty('--flagship-bottom-overlay', 'transparent') // used only for cozy-ui docs
  root.style.setProperty('--flagship-bottom-color', 'black') // used only for cozy-ui docs
  root.classList.add('flagship-app')

  // create status bar
  const statusBarDiv = document.createElement('div')
  statusBarDiv.setAttribute('id', 'flagshipStatusBar')
  statusBarDiv.style.cssText =
    'position:fixed;top:0;height:var(--flagship-top-height);z-index:10000000;color:var(--flagship-top-color);background-color:var(--flagship-top-bgcolor);width:100%;display:flex;align-items:center;justify-content:center'
  // create status bar overlay
  const statusBarOverlay = document.createElement('div')
  statusBarOverlay.setAttribute('id', 'flagshipStatusBarOverlay')
  statusBarOverlay.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-color:var(--flagship-top-overlay)'
  statusBarDiv.appendChild(statusBarOverlay)
  // create status bar text
  const statusBarText = document.createElement('div')
  statusBarText.setAttribute('id', 'flagshipStatusBarText')
  statusBarText.innerText = 'Flagship Top Status Bar with clock'
  statusBarDiv.appendChild(statusBarText)

  // create nav bar
  const navBarDiv = document.createElement('div')
  navBarDiv.setAttribute('id', 'flagshipNavBar')
  navBarDiv.style.cssText =
    'position:fixed;bottom:0;height:var(--flagship-bottom-height);z-index:10000000;color:var(--flagship-bottom-color);background-color:var(--flagship-bottom-bgcolor);width:100%;display:flex;align-items:center;justify-content:center'
  // create nav bar overlay
  const navBarOverlay = document.createElement('div')
  navBarOverlay.setAttribute('id', 'flagshipNavBarOverlay')
  navBarOverlay.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-color:var(--flagship-bottom-overlay)'
  navBarDiv.appendChild(navBarOverlay)
  // create nav bar text
  const navBarText = document.createElement('div')
  navBarText.setAttribute('id', 'flagshipNavBarText')
  navBarText.innerText = 'Flagship Nav Bar'
  navBarDiv.appendChild(navBarText)

  // add status and nav bar and its content into the DOM
  const currentDiv = document.getElementById('rsg-root')
  document.body.insertBefore(statusBarDiv, currentDiv)
  document.body.insertBefore(navBarDiv, currentDiv)
}

/**
 * Remove fake DOM element that simulates native Status and Nav bar
 */
export const removeFlagshipElements = () => {
  const root = document.getElementsByTagName('body')[0]
  root.style.removeProperty('--flagship-top-height')
  root.style.removeProperty('--flagship-top-bgcolor')
  root.style.removeProperty('--flagship-top-overlay')
  root.style.removeProperty('--flagship-top-color')
  root.style.removeProperty('--flagship-bottom-height')
  root.style.removeProperty('--flagship-bottom-bgcolor')
  root.style.removeProperty('--flagship-bottom-overlay')
  root.style.removeProperty('--flagship-bottom-color')
  root.classList.remove('flagship-app')

  document.getElementById('flagshipStatusBar')?.remove()
  document.getElementById('flagshipNavBar')?.remove()
}

/**
 * Whether we are in cozy-ui documentation (Rsg is for ReactStyleGuide)
 * @returns {boolean}
 */
export const isRsg = !!document.getElementById('rsg-root')

/**
 * Overrides flagship metadata
 * See https://github.com/cozy/cozy-libs/blob/master/packages/cozy-device-helper/src/flagship.ts#L13
 */
export const getFlagshipMetadata =
  isRsg || process.env.NODE_ENV === 'test'
    ? () => {
        const isFlagshipAppContained =
          JSON.parse(localStorage.getItem('flagship-app'))?.contained === 'on'

        return {
          immersive: isFlagshipAppContained ? false : true,
          statusBarHeight: isFlagshipAppContained ? 0 : 40,
          navbarHeight: isFlagshipAppContained ? 0 : 40
        }
      }
    : getFlagshipMetadataFromDeviceHelper

/**
 * Set the css values for Status and Nav bar inside cozy-ui documentation
 * see https://github.com/cozy/cozy-libs/blob/master/packages/cozy-intent/src/api/models/applications.ts#L33
 * @param {undefined | Partial<FlagshipUI>} param0
 * @returns
 */
export const setRsgFlagshipElements = ({
  topBackground,
  topOverlay,
  topTheme,
  bottomBackground,
  bottomOverlay,
  bottomTheme
} = {}) => {
  if (!isRsg) return

  const root = document.getElementsByTagName('body')[0]

  if (topBackground) {
    root.style.setProperty('--flagship-top-bgcolor', topBackground)
  }

  if (topOverlay) {
    root.style.setProperty('--flagship-top-overlay', topOverlay)
  }

  if (topTheme) {
    root.style.setProperty(
      '--flagship-top-color',
      topTheme === 'dark' ? 'black' : 'white'
    )
  }

  if (bottomBackground) {
    root.style.setProperty('--flagship-bottom-bgcolor', bottomBackground)
  }

  if (bottomOverlay) {
    root.style.setProperty('--flagship-bottom-overlay', bottomOverlay)
  }

  if (bottomTheme) {
    root.style.setProperty(
      '--flagship-bottom-color',
      bottomTheme === 'dark' ? 'black' : 'white'
    )
  }
}
