import metadata from './generate-metadata';
import html from './generate-html';

metadata().then((metadata) => html(metadata));