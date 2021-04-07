export const formatPrice = number => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}
export const formatWholePrice = number => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const getUniqueValues = (
  items,
  filter,
  prependText = 'all',
  isArray = false
) => {
  let unique = items.map(({ node }) => node[filter])
  if (isArray) {
    unique = unique.flat()
  }
  unique = unique.sort((a, b) => a.localeCompare(b))

  return [prependText, ...new Set(unique)]
}

export const isBrowser = typeof window !== `undefined`
export const checkWindow = () => {
  if (!isBrowser) {
    return false
  } else {
    return true
  }
}

export const getSafeCount = (max, q) => {
  let n = q < 1 ? 1 : q
  return n > max ? max : n
}
