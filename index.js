/*
    RakutenMA ES6 edition
    Helper functions for initializing and importing RakutenMA into server-side projects.

    Compatible with Node, Bun, and Deno
*/
import { readFileSync } from 'node:fs';

import { RakutenMA } from './rakutenma.js';

const loadModel = lang => {
    const file = readFileSync(new URL(`./model_${lang}.json`, import.meta.url), 'utf8');
    return JSON.parse(file);
};

// rakutenma is a shorthand convenience function for calling RakutenMA using the bundled
// models. It initializes RakutenMA using recommended settings.
const rakutenma = (lang = "ja") => {
    const rma = new RakutenMA(loadModel(lang));
    rma.featset = RakutenMA[`default_featset_${lang}`];
    rma.hash_func = RakutenMA.create_hash_func(15);
    return rma;
};

export { RakutenMA, loadModel, rakutenma };