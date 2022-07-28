import { getLuminance, Theme, useTheme } from '@material-ui/core'

import { getFlagshipMetadata, isFlagshipApp } from 'cozy-device-helper'

import {
  FlagshipUI,
  ThemeColor,
  useSetFlagshipUI
} from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

interface DialogEffectsOptions {
  cozybar?: Element | null
  fullscreen?: boolean
  immersive?: boolean
  sidebar?: HTMLElement | Element | null
  rootModal?: HTMLElement | Element | null
  theme: Theme
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
  theme
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
  cozybar
}: DialogEffectsOptions): FlagshipUI => {
  const hasDarkRoot =
    rootModal &&
    getLuminance(
      getComputedStyle(rootModal).getPropertyValue(DOMStrings.RootModalColor)
    ) < LUMINANCE_BREAKPOINT
  const hasBottomBackground = !rootModal
  const hasDarkBottomTheme = hasDarkRoot || !immersive
  const hasTopBackground = cozybar && !rootModal
  const hasDarkTopTheme =
    hasDarkRoot ||
    (!immersive &&
      !(cozybar && cozybar.classList.contains(DOMStrings.CozyBarPrimaryClass)))

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

  return modals.length > 0 ? (modals[0] as HTMLElement) : null
}

const useHook = (fullscreen?: boolean): void => {
  const theme = useTheme()
  const cozybar = document.querySelector(DOMStrings.CozyBarClass)
  const sidebar = document.getElementById(DOMStrings.SidebarID)
  const rootModal = getRootModal()
  const immersive = Boolean(getFlagshipMetadata().immersive)

  useSetFlagshipUI(
    makeOnMount({ fullscreen, theme, sidebar, rootModal, cozybar }),
    makeOnUnmount({ rootModal, theme, immersive, sidebar, cozybar }),
    makeCaller(!!fullscreen, !!rootModal, immersive)
  )
}

export const useDialogEffects = isFlagshipApp()
  ? useHook
  : // eslint-disable-next-line @typescript-eslint/no-empty-function
    (): void => {}
