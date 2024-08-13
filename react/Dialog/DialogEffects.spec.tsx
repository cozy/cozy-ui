import '@testing-library/jest-dom'
import React from 'react'
import { Theme } from '@material-ui/core'
import { render } from '@testing-library/react'

import { WebviewIntentProvider, WebviewService } from 'cozy-intent'

import Dialog from '.'
import DemoProvider from '../providers/DemoProvider'
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

const Wrapper = ({ open, service }) => {
  return (
    <WebviewIntentProvider webviewService={service}>
      <DemoProvider>
        <Dialog open={open} />
      </DemoProvider>
    </WebviewIntentProvider>
  )
}

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
      theme,
      isLight: true
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
      theme,
      isLight: true
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
      theme,
      isLight: true
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
      theme,
      isLight: true
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

jest.mock('cozy-device-helper', () => ({
  isFlagshipApp: (): boolean => true
}))
jest.mock('../hooks/useSetFlagshipUi/helpers', () => ({
  getFlagshipMetadata: (): Record<string, never> => ({}),
  setRsgFlagshipElements: (): null => null
}))

const onOpenMountExpected = {
  bottomBackground: '#fff',
  bottomOverlay: 'rgba(0, 0, 0, 0.5)',
  bottomTheme: 'light',
  topOverlay: 'rgba(0, 0, 0, 0.5)',
  topTheme: 'light'
}

const onOpenUnmountExpected = {
  bottomBackground: '#fff',
  bottomOverlay: 'transparent',
  bottomTheme: 'dark',
  topOverlay: 'transparent',
  topTheme: 'dark'
}

it('should emit onMount() immediately and onUnmount() when the whole tree is deleted', () => {
  const caller = jest.fn<void, unknown[]>()
  const service = {
    call: (...args: unknown[]): void => caller(...args)
  } as WebviewService

  const { unmount } = render(<Wrapper service={service} open={true} />)

  expect(caller).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    onOpenMountExpected,
    'cozy-ui/Dialog (onOpenMount)'
  )

  unmount()

  expect(caller).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    onOpenUnmountExpected,
    'cozy-ui/Dialog (onOpenUnmount)'
  )
})

it('should emit onMount() immediately and onUnmount() when Dialog is deleted from the tree', () => {
  const caller = jest.fn<void, unknown[]>()
  const service = {
    call: (...args: unknown[]): void => caller(...args)
  } as WebviewService

  const { rerender } = render(<Wrapper service={service} open={true} />)

  expect(caller).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    onOpenMountExpected,
    'cozy-ui/Dialog (onOpenMount)'
  )

  rerender(
    <WebviewIntentProvider webviewService={service}></WebviewIntentProvider>
  )

  expect(caller).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    onOpenUnmountExpected,
    'cozy-ui/Dialog (onOpenUnmount)'
  )
})

it('should not emit onMount() if mounted as open:false, then emit onMount() on open:true, then emit onUnmount() on switch back to open:false, then emit onMount() again on switch back to open:true, then emit onUnmount() again when the tree is deleted', () => {
  const caller = jest.fn<void, unknown[]>()
  const service = {
    call: (...args: unknown[]): void => caller(...args)
  } as WebviewService

  const { rerender, unmount } = render(
    <Wrapper service={service} open={false} />
  )

  expect(caller).not.toHaveBeenCalled()

  rerender(<Wrapper service={service} open={true} />)

  expect(caller).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    onOpenMountExpected,
    'cozy-ui/Dialog (onOpenMount)'
  )

  rerender(<Wrapper service={service} open={false} />)

  expect(caller).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    onOpenUnmountExpected,
    'cozy-ui/Dialog (onOpenUnmount)'
  )

  rerender(<Wrapper service={service} open={true} />)

  expect(caller).toHaveBeenNthCalledWith(
    3,
    'setFlagshipUI',
    onOpenMountExpected,
    'cozy-ui/Dialog (onOpenMount)'
  )

  unmount()

  expect(caller).toHaveBeenNthCalledWith(
    4,
    'setFlagshipUI',
    onOpenUnmountExpected,
    'cozy-ui/Dialog (onOpenUnmount)'
  )
})

it('when provided with a faulty <Dialog /> that has no open prop, it should emit nothing at mount or unmount', () => {
  /** Using Dialog without open prop is forbidden, so we acknowledge that but since we need to test it we silence the console */
  jest.spyOn(console, 'error').mockImplementation(() => {
    // do nothing
  })

  const caller = jest.fn<void, unknown[]>()
  const service = {
    call: (...args: unknown[]): void => caller(...args)
  } as WebviewService

  const { unmount } = render(<Wrapper service={service} />)

  expect(caller).not.toHaveBeenCalled()

  unmount()

  /** As it was mounted without the open prop, and we never changed it, then it never sent an onMount message.
   * In this scenario, it is only logical that it does not send an unMount message either since it never showed up.
   */
  expect(caller).not.toHaveBeenCalled()
})

it('when provided with a faulty <Dialog /> that has no open prop, and then fixed at runtime, it should emit mount and unmount messages as shown earlier', () => {
  const caller = jest.fn<void, unknown[]>()
  const service = {
    call: (...args: unknown[]): void => caller(...args)
  } as WebviewService

  const { rerender, unmount } = render(<Wrapper service={service} />)

  expect(caller).not.toHaveBeenCalled()

  rerender(<Wrapper service={service} open={true} />)

  expect(caller).toHaveBeenNthCalledWith(
    1,
    'setFlagshipUI',
    onOpenMountExpected,
    'cozy-ui/Dialog (onOpenMount)'
  )

  rerender(<Wrapper service={service} open={false} />)

  expect(caller).toHaveBeenNthCalledWith(
    2,
    'setFlagshipUI',
    onOpenUnmountExpected,
    'cozy-ui/Dialog (onOpenUnmount)'
  )

  unmount()

  /** Checking it doesn't send two unmount messages in a row */
  expect(caller).toHaveBeenCalledTimes(2)
})
