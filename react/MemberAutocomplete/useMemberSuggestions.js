import { useEffect, useRef, useState } from 'react'

import { makeSuggestions } from './helpers'

/**
 * Computes the members to suggest for the typed text. The local ones and the ones made
 * from the text are always up to date. The fetched ones come first once `fetchSuggestions`
 * answers for the current text.
 *
 * @param {object} params
 * @param {string} params.inputValue - Typed text
 * @param {Function} params.getSuggestions - Returns the local members matching a text
 * @param {Function} [params.fetchSuggestions] - Resolves with the remote members matching a text
 * @param {Function} params.getMembersFromText - Turns a text into members, suggested when nothing matches
 * @param {number} params.minQueryLength - Text length from which `fetchSuggestions` is called
 * @param {number} params.debounceMs - Delay before calling `fetchSuggestions`
 * @returns {{ suggestions: object[], isFetching: boolean }}
 */
export const useMemberSuggestions = ({
  inputValue,
  getSuggestions,
  fetchSuggestions,
  getMembersFromText,
  minQueryLength,
  debounceMs
}) => {
  const [fetched, setFetched] = useState({ query: '', members: [] })
  const fetchSuggestionsRef = useRef()
  fetchSuggestionsRef.current = fetchSuggestions

  const query = inputValue.trim()
  const isRemoteQuery =
    fetchSuggestions !== undefined && query.length >= minQueryLength
  const isFetching = isRemoteQuery && fetched.query !== query

  useEffect(() => {
    if (!isRemoteQuery) return

    let isOutdated = false
    const timeout = setTimeout(async () => {
      let members = []
      try {
        members = (await fetchSuggestionsRef.current(query)) ?? []
      } catch {
        members = []
      }
      if (!isOutdated) setFetched({ query, members })
    }, debounceMs)

    return () => {
      isOutdated = true
      clearTimeout(timeout)
    }
  }, [query, isRemoteQuery, debounceMs])

  if (query.length === 0) return { suggestions: [], isFetching: false }

  const fetchedSuggestions = fetched.query === query ? fetched.members : []
  const suggestions = makeSuggestions(
    [...fetchedSuggestions, ...getSuggestions(query)],
    getMembersFromText(query)
  )

  return { suggestions, isFetching }
}
