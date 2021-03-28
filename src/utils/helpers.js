export const formatPrice = (number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
}
export const formatWholePrice = (number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number / 100)
}

export const getUniqueValues = (items, filter, addAll=true,  isArray=false) => {
  let unique = items.map(({node}) => node[filter])
  if(addAll){
    unique.push('all')
  }
  if(isArray){
    unique = unique.flat();
  }
  unique = unique.sort((a, b) => a.localeCompare(b))
  return [...new Set(unique)]
}


const isBrowser = typeof window !== `undefined`
export const checkWindow = ()=>{
  if (!isBrowser){
    return false
  }
  else{
    return true
  }
}
