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

export const getUniqueValues = (items, filter, isArray=false) => {
  let unique = ["all", ...new Set(
    items.map(({node}) => {
      return node[filter]
    })
  )];
  if(isArray){
    unique = unique.flat();
  }
  return unique 
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
