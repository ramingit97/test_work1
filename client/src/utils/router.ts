import { compile } from 'path-to-regexp';

export const pathToUrl = (path, params = {}) => {
  try {
    const toPath = compile(path);
    return toPath(params);
  } catch (error) {
    console.error('Error compiling path:', error);
    return '';
  }
};