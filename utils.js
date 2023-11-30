/*
    Utilities for testing RakutenMA ES6.
    Run with Bun.
*/

import { RakutenMA, loadModel, rakutenma } from "./index.js";

// const rma = new RakutenMA(loadModel("ja"));
// rma.featset = RakutenMA.default_featset_ja;
// rma.hash_func = RakutenMA.create_hash_func(15);

const rma = rakutenma();

console.log(rma.tokenize("たむちゃんはちゃっきーさんに全く惚れちゃったよ。"));