export const getRandomID = () => {
  let array = new Uint32Array(1)
  crypto.getRandomValues(array)
  
  const maxIntValue = 2147483647
  return array[0] % maxIntValue
}
