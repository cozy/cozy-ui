import { getRandomUUID } from './getRandomUUID'

describe('getRandomUUID', () => {
  it('returns a random uuid', () => {
    const uuid = getRandomUUID()

    expect(uuid).toBe('random-uuid-for-jest')
  })
})
