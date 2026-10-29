import { act, renderHook } from '@testing-library/react-hooks'

import { useMemberSuggestions } from './useMemberSuggestions'

const alice = { id: 'alice', name: 'Alice' }
const bob = { id: 'bob', name: 'Bob' }
const email = { id: 'carol@cozy.cc', name: 'carol@cozy.cc' }

describe('useMemberSuggestions', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const setup = props =>
    renderHook(
      inputValue =>
        useMemberSuggestions({
          inputValue,
          getSuggestions: () => [],
          getMembersFromText: () => [],
          minQueryLength: 3,
          debounceMs: 300,
          ...props
        }),
      { initialProps: 'al' }
    )

  it('shows the local suggestions at once below the minimum length', () => {
    const fetchSuggestions = jest.fn()
    const { result } = setup({
      getSuggestions: () => [alice],
      fetchSuggestions
    })

    expect(result.current.suggestions).toEqual([alice])
    expect(fetchSuggestions).not.toHaveBeenCalled()
  })

  it('shows the local suggestions at once, then the fetched ones first', async () => {
    const { result, rerender } = setup({
      getSuggestions: () => [alice],
      fetchSuggestions: async () => [bob, alice]
    })

    rerender('ali')
    expect(result.current.suggestions).toEqual([alice])
    expect(result.current.isFetching).toBe(true)
    await act(async () => {
      jest.advanceTimersByTime(300)
    })

    expect(result.current.suggestions).toEqual([bob, alice])
    expect(result.current.isFetching).toBe(false)
  })

  it('stops suggesting the fetched members once the text changes', async () => {
    const { result, rerender } = setup({
      fetchSuggestions: async () => [bob],
      getMembersFromText: () => [email]
    })

    rerender('bob')
    await act(async () => {
      jest.advanceTimersByTime(300)
    })
    rerender('carol@cozy.cc')

    expect(result.current.suggestions).toEqual([email])
  })

  it('ignores the answer for an outdated text', async () => {
    const fetchSuggestions = jest.fn(async query =>
      query === 'ali' ? [bob] : []
    )
    const { result, rerender } = setup({ fetchSuggestions })

    rerender('ali')
    rerender('alic')
    await act(async () => {
      jest.advanceTimersByTime(300)
    })

    expect(fetchSuggestions).toHaveBeenCalledTimes(1)
    expect(fetchSuggestions).toHaveBeenCalledWith('alic')
    expect(result.current.suggestions).toEqual([])
  })

  it('suggests the members made from the text when nothing matches', () => {
    const { result } = setup({ getMembersFromText: () => [email] })

    expect(result.current.suggestions).toEqual([email])
  })
})
