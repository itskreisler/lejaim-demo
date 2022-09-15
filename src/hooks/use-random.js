const useRandomInt = (max, min, both = false) =>
  Math.floor(Math.random() * (max - min + (both ? 1 : 0))) + min
const useRandomItem = (props) => {
  let item
  let keys
  let values
  let ranInt
  Array.isArray(props)
    ? (item = props[useRandomInt(0, props.length)])
    : (item = null)
  try {
    !item && (keys = Object.keys(props))
    !item && (values = Object.values(props))
    !item && (ranInt = useRandomInt(0, keys.length))
    !item &&
      (item = JSON.parse(
        `{"${keys[ranInt]}":${JSON.stringify(values[ranInt])}}`
      ))
  } catch (error) {}
  return item
}

export { useRandomItem }
