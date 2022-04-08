const { VITE_REACT_APP_TITLE: BASE_DOC_TITLE } = import.meta.env;

export const setDocumentTitle = (documentTitle: string): string | boolean => {
  return documentTitle ? `${documentTitle}` : BASE_DOC_TITLE;
};
