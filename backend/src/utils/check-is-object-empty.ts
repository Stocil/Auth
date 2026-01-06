export const checkIsObjectEmpty = (object: Object | undefined) =>
  !object ? true : !Object.keys(object).length;
