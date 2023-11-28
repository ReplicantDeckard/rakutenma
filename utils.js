/*
    Utilities for testing RakutenMA ES6.
    Run with Bun.
*/

import { RakutenMA } from "./index.js";
import model from "./model_ja.json";

const rma = new RakutenMA(model);
rma.featset = RakutenMA.default_featset_ja;
rma.hash_func = RakutenMA.create_hash_func(15);

console.log(rma.tokenize("たむちゃん　はちゃっきーさんに全く惚れちゃったよ。"));