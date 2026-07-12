import { author } from './author';
import { category } from './category';
import { post } from './post';
import { settings } from './settings';
import { callout } from './objects/callout';
import { table } from './objects/table';
import { youtube } from './objects/youtube';

export const schemaTypes = [
  post,
  author,
  category,
  settings,
  callout,
  table,
  youtube,
];
