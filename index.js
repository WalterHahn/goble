var globals = {};

/**
 * gets global value at index
 * @param {string} key
 * @return {mixed}
 */
function get(key) {
  try {
    if (typeof key !== 'string')
      throw 'key must be type string';
    return globals[key] || null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

/**
 * sets global value for index
 * @param {string} key
 * @param {mixed} val
 * @return {null}
 */
function set(key, val) {
  try {
    if (typeof key !== 'string')
      throw 'key must be type string';
    globals[key] = val;
  } catch (err) {
    console.log(err);
  }

  return null;
}

/**
 * resets global store to empty object
 * @return {null}
 */
function clear() {
  globals = {};
}

module.exports = {
  get: get,
  set: set,
  clear: clear
};
