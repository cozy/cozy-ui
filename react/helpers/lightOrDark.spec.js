import { lightOrDark } from './lightOrDark'

it('should return "light" for #fff', () => {
  expect(lightOrDark('#fff')).toBe('light')
})

it('should return "light" for rgb(200, 200, 200)', () => {
  expect(lightOrDark('rgb(200, 200, 200)')).toBe('light')
})

it('should return "light" for rgba(255, 255, 255, 0.5)', () => {
  expect(lightOrDark('rgba(255, 255, 255, 0.5)')).toBe('light')
})

it('should return "dark" for #000', () => {
  expect(lightOrDark('#000')).toBe('dark')
})

it('should return "dark" for rgb(33, 33, 33)', () => {
  expect(lightOrDark('rgb(33, 33, 33)')).toBe('dark')
})

it('should return "dark" for rgba(0, 0, 0, 0.5)', () => {
  expect(lightOrDark('rgba(0, 0, 0, 0.5)')).toBe('dark')
})
