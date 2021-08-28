/* The Unicode block for Malayalam is U+0D00–U+0D7F */

const MALAYALAM_MIN_UNICODE = 0x0d00;
const MALAYALAM_MAX_UNICODE = 0x0d7f;

function isMalayalam(string) {
  if (typeof string !== "string") {
    return new TypeError("Parameter is not a string");
  }

  const length = string.length;

  for (let index = 0; index < length; index++) {
    const charCode = string.charCodeAt(index);
    if (charCode >= MALAYALAM_MIN_UNICODE && charCode <= MALAYALAM_MAX_UNICODE) {
      return true;
    }
  }

  return false;
}

module.exports = isMalayalam;
