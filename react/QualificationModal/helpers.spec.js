import { searchOptionsFn } from './helpers'

describe('searchOptionsFn', () => {
  it('should return only the uniq good result', () => {
    const options = {
      children: [
        { id: 'none', title: 'None' },
        {
          id: 'theme1',
          title: 'Identity',
          children: [
            { id: '01', title: 'Identity Photo' },
            { id: '02', title: 'ID card' }
          ]
        },
        {
          id: 'theme2',
          title: 'Family',
          children: [
            { id: '03', title: 'Family record book' },
            { id: '04', title: 'Birth certificate' },
            { id: '01', title: 'Identity Photo' }
          ]
        }
      ]
    }

    const res = searchOptionsFn(options, 'photo')

    expect(res).toStrictEqual([{ id: '01', title: 'Identity Photo' }])
  })

  it('should return the initial list and not all children', () => {
    const options = {
      children: [
        { id: 'none', title: 'None' },
        {
          id: 'theme1',
          title: 'Identity',
          children: [
            { id: '01', title: 'Identity Photo' },
            { id: '02', title: 'ID card' }
          ]
        },
        {
          id: 'theme2',
          title: 'Family',
          children: [
            { id: '03', title: 'Family record book' },
            { id: '04', title: 'Birth certificate' },
            { id: '01', title: 'Identity Photo' }
          ]
        }
      ]
    }

    const res = searchOptionsFn(options, '')

    expect(res).toStrictEqual(options.children)
  })
})
