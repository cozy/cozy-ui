import { makeOptions, makeData } from '.'

describe('makeOptions', () => {
  it('should return default options', () => {
    const options = makeOptions({ options: {}, single: false })

    expect(options).toStrictEqual({
      cutout: '75%',
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      animation: { duration: 1000 }
    })
  })

  it('should return default options for a single pie chart', () => {
    const options = makeOptions({ options: {}, single: true })

    expect(options).toStrictEqual({
      cutout: '75%',
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      animation: { duration: 1000 },
      plugins: { tooltip: { filter: expect.any(Function) } }
    })
  })

  it('should return default and customized options', () => {
    const options = makeOptions({ options: { foo: 'bar' }, single: false })

    expect(options).toStrictEqual({
      cutout: '75%',
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      animation: { duration: 1000 },
      foo: 'bar'
    })
  })

  it('should return default and customized options for a single pie chart', () => {
    const options = makeOptions({ options: { foo: 'bar' }, single: true })

    expect(options).toStrictEqual({
      cutout: '75%',
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      animation: { duration: 1000 },
      plugins: { tooltip: { filter: expect.any(Function) } },
      foo: 'bar'
    })
  })

  it('should return default and customized options for a single pie chart even for customized default option', () => {
    const options = makeOptions({
      options: { plugins: { tooltip: { foo: 'bar' } } },
      single: true
    })

    expect(options).toStrictEqual({
      cutout: '75%',
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      animation: { duration: 1000 },
      plugins: {
        tooltip: {
          foo: 'bar',
          filter: expect.any(Function)
        }
      }
    })
  })
})

describe('makeData', () => {
  it('should return previous data is not a single pie chart', () => {
    const prevData = { labels: ['Health'] }
    const data = makeData({
      data: prevData,
      single: false,
      theme: { palette: { primary: { main: '#fff' } } }
    })

    expect(data).toStrictEqual(prevData)
  })

  it('should add backgroud color for a single pie chart', () => {
    const data = makeData({
      data: { labels: ['Health'] },
      single: true,
      theme: { palette: { primary: { main: '#fff' } } }
    })

    expect(data).toStrictEqual({
      labels: ['Health'],
      datasets: [{ backgroundColor: ['#fff', 'transparent'] }]
    })
  })

  it('should not mutate previous data for a single pie chart', () => {
    const prevData = { labels: ['Health'] }
    makeData({
      data: prevData,
      single: true,
      theme: { palette: { primary: { main: '#fff' } } }
    })

    expect(prevData).toStrictEqual({ labels: ['Health'] })
  })
})
