function isMalayalam(string: string): boolean {
  const length = string.length;
  const MALAYALAM_MIN_UNICODE = 0x0d00;
  const MALAYALAM_MAX_UNICODE = 0x0d7f;

  for (let index = 0; index < length; index++) {
    const charCode = string.charCodeAt(index);

    if (charCode >= MALAYALAM_MIN_UNICODE && charCode <= MALAYALAM_MAX_UNICODE) {
      return true;
    }
  }

  return false;
}

export default isMalayalam;
