const spliceItem = (arr, id) => {
  const idx = arr.findIndex(x => x.id === id)
  arr.splice(idx, 1)
}

const popFront = arr => {
  const item = arr[0]
  arr.splice(0, 1)
  return item
}

class Queue {
  constructor(n) {
    this.size = n
    this.id = 0
    this.queue = []
    this.flight = []
  }

  tryPop() {
    if (this.flight.length < this.size && this.queue.length > 0) {
      const item = popFront(this.queue)
      this.flight.push(item)
      const { task, resolve, reject, id } = item
      const finish = original => (...args) => {
        original(...args)
        spliceItem(this.flight, id)
      }
      task()
        .then(finish(resolve))
        .catch(finish(reject))
    }
  }

  enqueue(task) {
    return new Promise((resolve, reject) => {
      let itemId = this.id++
      const finish = original => (...args) => {
        original(...args)
        this.tryPop()
        spliceItem(this.queue, itemId)
      }
      this.queue.push({
        task,
        resolve: finish(resolve),
        reject: finish(reject),
        id: itemId
      })
      this.tryPop()
    })
  }
}

module.exports = Queue
