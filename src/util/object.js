/**
 * Return the first property non null | undefined
 */
export const coalesce = object => {
  for (var prop in object) {
    if (object[prop] !== undefined && object[prop] !== null) {
      return prop;
    }
  }
  return false;
};
