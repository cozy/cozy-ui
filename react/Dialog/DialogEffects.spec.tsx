import { Theme } from '@material-ui/core'

import { DOMStrings, makeOnMount, makeOnUnmount } from './DialogEffects'
import { ThemeColor } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const theme = {
  palette: {
    background: {
      paper: DOMStrings.BackgroundPaper,
      default: DOMStrings.BackgroundDefault
    }
  }
} as Theme

const cozybar = document.createElement('div')
const cozybarBackground = 'rgb(153, 153, 153)'
cozybar.style.backgroundColor = cozybarBackground

const sidebar = document.createElement('div')

const rootModal = document.createElement('div')
const rootModalColor = 'rgba(29, 33, 42, 0.9)'
rootModal.style.color = rootModalColor

it('should provide overlay UI when opened non-fullscreen', () => {
  expect(
    makeOnMount({
      cozybar,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    bottomOverlay: DOMStrings.OverlayActive,
    bottomTheme: ThemeColor.Light,
    topBackground: cozybarBackground,
    topOverlay: DOMStrings.OverlayActive,
    topTheme: ThemeColor.Light
  })
})

it('should provide fullscreen UI when opened fullscreen', () => {
  expect(
    makeOnMount({
      fullscreen: true,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    bottomTheme: ThemeColor.Dark,
    topBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    topTheme: ThemeColor.Dark
  })
})

it('should provide limited overlay UI when opened non-fullscreen as a stacked Dialog', () => {
  expect(
    makeOnMount({
      rootModal,
      sidebar,
      theme
    })
  ).toEqual({
    bottomOverlay: DOMStrings.OverlayActive,
    bottomTheme: ThemeColor.Light,
    topOverlay: DOMStrings.OverlayActive,
    topTheme: ThemeColor.Light
  })
})

it('should provide overloaded overlay UI with sidebar background if existing', () => {
  expect(
    makeOnMount({
      sidebar,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundDefault],
    bottomOverlay: DOMStrings.OverlayActive,
    bottomTheme: ThemeColor.Light,
    topOverlay: DOMStrings.OverlayActive,
    topTheme: ThemeColor.Light
  })
})

it('should provide a basic overlay UI when opened as a stacked Dialog', () => {
  expect(
    makeOnMount({
      rootModal,
      theme
    })
  ).toEqual({
    bottomOverlay: DOMStrings.OverlayActive,
    bottomTheme: ThemeColor.Light,
    topOverlay: DOMStrings.OverlayActive,
    topTheme: ThemeColor.Light
  })
})

it('should provide a basic overlay UI when opened as a stacked Dialog regardless of CozyBar', () => {
  expect(
    makeOnMount({
      cozybar,
      rootModal,
      theme
    })
  ).toEqual({
    bottomOverlay: DOMStrings.OverlayActive,
    bottomTheme: ThemeColor.Light,
    topOverlay: DOMStrings.OverlayActive,
    topTheme: ThemeColor.Light
  })
})

it('should provide an inversed overlay UI when leaving overlay mode', () => {
  expect(
    makeOnUnmount({
      rootModal,
      theme
    })
  ).toEqual({
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Dark,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Dark
  })
})

it('should provide an inversed overlay UI when leaving overlay mode regardless of immersive or stacked mode', () => {
  expect(
    makeOnUnmount({
      immersive: true,
      rootModal,
      theme
    })
  ).toEqual({
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Dark,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Dark
  })
})

it('should provide a strong reset when unmounting a Dialog in presence of a Sidebar', () => {
  expect(
    makeOnUnmount({
      sidebar,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundDefault],
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Dark,
    topBackground: undefined,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Dark
  })
})

it('should provide the default black on white UI when unmounting in simple contexts', () => {
  expect(
    makeOnUnmount({
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Dark,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Dark
  })
})

it('should provide the default immersive UI when unmounting in immersive context', () => {
  expect(
    makeOnUnmount({
      immersive: true,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Light,
    topBackground: undefined,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Light
  })
})

it('should provide the default black on white UI with the Cozybar background on bottom', () => {
  expect(
    makeOnUnmount({
      cozybar,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Dark,
    topBackground: cozybarBackground,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Dark
  })
})

it('should provide the inversed UI when Cozybar is not black on white, but white on blue', () => {
  cozybar.classList.add('coz-theme-primary')

  expect(
    makeOnUnmount({
      cozybar,
      theme
    })
  ).toEqual({
    bottomBackground: theme.palette.background[DOMStrings.BackgroundPaper],
    bottomOverlay: DOMStrings.OverlayTransparent,
    bottomTheme: ThemeColor.Dark,
    topBackground: cozybarBackground,
    topOverlay: DOMStrings.OverlayTransparent,
    topTheme: ThemeColor.Light
  })
})
