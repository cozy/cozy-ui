export default useCycle;
/**
 * When calling setPrev when we are at index min, goes to max
 * When calling setNext when we are at index max, goes to min
 *
 * @param  {number} initialState - If initialState becomes defined (undefined -> value),
 * index will be set to value (useful when the initial state is not known yet)
 * @param  {number} min
 * @param  {number} max
 * @return {Array} - [index, setPrev, setNext]
 */
declare function useCycle(initialState: number, min: number, max: number): any[];
