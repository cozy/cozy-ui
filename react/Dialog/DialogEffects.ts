import { getLuminance, Theme, useTheme } from '@material-ui/core'
import { useEffect } from 'react'

import { isFlagshipApp } from 'cozy-device-helper'
import { useWebviewIntent } from 'cozy-intent'

import {
  FlagshipUI,
  ThemeColor,
  parseArg
} from '../hooks/useSetFlagshipUi/useSetFlagshipUI'
import { getFlagshipMetadata } from '../hooks/useSetFlagshipUi/helpers'
import { isRsg } from '../hooks/useSetFlagshipUi/helpers'
import { useCozyTheme } from '../providers/CozyTheme'

interface DialogEffectsOptions {
  cozybar?: Element | null
  fullscreen?: boolean
  immersive?: boolean
  sidebar?: HTMLElement | Element | null
  rootModal?: HTMLElement | Element | null
  theme: Theme
  isLight?: boolean
}

export enum DOMStrings {
  BackgroundDefault = 'default',
  BackgroundPaper = 'paper',
  CozyBarBackground = 'background-color',
  CozyBarClass = '.coz-bar-wrapper',
  CozyBarPrimaryClass = 'coz-theme-primary',
  DialogClass = '.MuiPaper-root',
  OverlayActive = 'rgba(0, 0, 0, 0.5)',
  OverlayTransparent = 'transparent',
  RootModalColor = 'color',
  SidebarID = 'sidebar'
}

const LUMINANCE_BREAKPOINT = 0.5

export const makeOnMount = ({
  cozybar,
  fullscreen,
  sidebar,
  rootModal,
  theme,
  isLight
}: DialogEffectsOptions): FlagshipUI => {
  const hasBottomBackground = !rootModal
  const hasTopBackground = cozybar && !rootModal

  return fullscreen
    ? {
        bottomBackground: theme.palette.background.paper,
        bottomTheme: ThemeColor.Dark,
        topBackground: theme.palette.background.paper,
        topTheme: ThemeColor.Dark
      }
    : {
        bottomBackground: hasBottomBackground
          ? theme.palette.background[
              sidebar
                ? DOMStrings.BackgroundDefault
                : DOMStrings.BackgroundPaper
            ]
          : undefined,
        bottomTheme: ThemeColor.Light,
        bottomOverlay: DOMStrings.OverlayActive,
        topOverlay: DOMStrings.OverlayActive,
        topBackground: hasTopBackground
          ? getComputedStyle(cozybar).getPropertyValue(
              DOMStrings.CozyBarBackground
            )
          : undefined,
        topTheme: ThemeColor.Light
      }
}

export const makeOnUnmount = ({
  rootModal,
  theme,
  immersive,
  sidebar,
  cozybar,
  isLight
}: DialogEffectsOptions): FlagshipUI => {
  const hasDarkRoot =
    rootModal &&
    getLuminance(
      getComputedStyle(rootModal).getPropertyValue(DOMStrings.RootModalColor)
    ) < LUMINANCE_BREAKPOINT
  const hasBottomBackground = !rootModal
  const hasDarkBottomTheme = hasDarkRoot || (!immersive && isLight)
  const hasTopBackground = cozybar && !rootModal
  const hasDarkTopTheme =
    hasDarkRoot ||
    (!immersive &&
      !(
        cozybar && cozybar.classList.contains(DOMStrings.CozyBarPrimaryClass)
      ) &&
      isLight)

  return {
    bottomBackground: hasBottomBackground
      ? theme.palette.background[
          sidebar ? DOMStrings.BackgroundDefault : DOMStrings.BackgroundPaper
        ]
      : undefined,
    bottomTheme: hasDarkBottomTheme ? ThemeColor.Dark : ThemeColor.Light,
    bottomOverlay: DOMStrings.OverlayTransparent,
    topOverlay: DOMStrings.OverlayTransparent,
    topBackground: hasTopBackground
      ? getComputedStyle(cozybar).getPropertyValue(DOMStrings.CozyBarBackground)
      : undefined,
    topTheme: hasDarkTopTheme ? ThemeColor.Dark : ThemeColor.Light
  }
}

const makeCaller = (
  fullScreen: boolean,
  hasAnotherDialog: boolean,
  immersive: boolean
): string =>
  [
    'cozy-ui/Dialog',
    fullScreen ? '--fullScreen' : '',
    hasAnotherDialog ? '--stacked' : '',
    immersive ? '--immersive' : ''
  ].join('')

const getRootModal = (): HTMLElement | null => {
  const modals = document.querySelectorAll(DOMStrings.DialogClass)

  /**
   * If we have more than one modal, we are in a stacked dialog scenario.
   * In this case we want to have access to the DOM element of the root modal.
   * This will allow us to apply the correct background color if a root modal exists, for instance.
   */
  return modals.length > 1 ? (modals[0] as HTMLElement) : null
}

const useHook = (open: boolean, fullscreen?: boolean): void => {
  const theme = useTheme()
  const { isLight } = useCozyTheme()
  const cozybar = document.querySelector(DOMStrings.CozyBarClass)
  const sidebar = document.getElementById(DOMStrings.SidebarID)
  const rootModal = getRootModal()
  const immersive = Boolean(getFlagshipMetadata().immersive)

  useDialogSetFlagshipUI(
    open,
    makeOnMount({ fullscreen, theme, sidebar, rootModal, cozybar, isLight }),
    makeOnUnmount({ rootModal, theme, immersive, sidebar, cozybar, isLight }),
    makeCaller(!!fullscreen, !!rootModal, immersive)
  )
}

/**
 * Custom version of useSetFlagshipUi() that is aware of the Dialog component.
 *
 * The difference here is that we send messages to the Native app when a props change.
 * In the original version, we send the mount message as soon as the component is rendered.
 *
 * Dialog can be rendered but hidden, so we need to wait for the open prop to be true
 */
export const useDialogSetFlagshipUI = (
  open: boolean,
  onMount: FlagshipUI,
  onUnmount?: FlagshipUI,
  caller?: string
): void => {
  const webviewIntent = useWebviewIntent()

  useEffect(() => {
    if (open)
      parseArg(webviewIntent, onMount, `${caller || 'unknown'} (onOpenMount)`)

    return () => {
      /**
       * As we are listening to the open prop, we still want to send an unmount message when the prop changes to false.
       * To avoid false positives, we need to ensure the component is currently showing.
       * We do that by checking if value of open during this cleanup cycle is false,
       * if it is, that means the component is currently showing and is in the process of hiding.
       *
       * Note that this will also handle abrupt unmounting, as in hiding the dialog without using the open prop.
       */
      if (open === false || open === undefined) return

      parseArg(
        webviewIntent,
        onUnmount,
        `${caller || 'unknown'} (onOpenUnmount)`
      )
    }

    /**
     * We don't want to listen to onMount/onUnmount arguments
     * It will create far too many unwanted calls
     * We only care about webviewIntent or open props presence,
     * Open should always be present, webviewIntent is more uncertain
     */
  }, [open, webviewIntent]) // eslint-disable-line react-hooks/exhaustive-deps
}

export const useDialogEffects =
  isFlagshipApp() || isRsg
    ? useHook
    : // eslint-disable-next-line @typescript-eslint/no-empty-function
      (): void => {}
