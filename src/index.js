/* Source
    - Wikipedia: https://en.wikipedia.org/wiki/Malayalam_script#Unicode
    - Unicode chart: https://www.unicode.org/charts/PDF/U0D00.pdf

  The Unicode block for Malayalam is U+0D00–U+0D7F:
    - Unicode: 0D00 (0x0D00)
    - Unicode: 0D7F (0x0D7F)
*/

const MALAYALAM_MIN_UNICODE = 3328; // 0x0D00
const MALAYALAM_MAX_UNICODE = 3455; // 0x0D7F

function isMalayalam(string) {
  if (typeof string !== "string") return "";

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
