export const slug = (text: string) => {

  return (
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u0621-\u064A0-9-]+/g, '')
      // eslint-disable-next-line no-useless-escape
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  );

}