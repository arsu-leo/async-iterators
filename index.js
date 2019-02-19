class AsyncLoops
{
  /**
   * Runs, for each element of the iterable element the function in sequential order
   * @param {Iterable} iterable
   * @param {Callable} func
   */
  async forEach(iterable, func)
  {
    let i = 0
    for(let element of iterable)
    {
      await func(element, i, iterable)
      i++
    }
  }

  /**
   * Runs, for each element of the iterable element the function in any order, returns a promise which is fullfilled once all finished
   * @param {Iterable} iterable
   * @param {Callable} func
   */
  parallel(iterable, func)
  {
    const promises = []
    let i = 0
    for(let element of iterable)
    {
      promises.push(func(element, i, iterable))
      i++
    }
    return Promise.all(promises)
  }
}

module.exports = new AsyncLoops
