#!/usr/bin/env node

// import primitives
import console from "node:console";

// import modules
import pepe from "../pepe-ascii.js";

// no try/catch because we want the test script to throw the error on fail
// no error handlers because we want the test script to throw the error on fail

const
    pepes = [
        `FeelsAmazingMan`,
        `FeelsDankMan`,
        `FeelsGoodMan`,
        `FeelsOkayMan`,
        `FeelsOkayManWine`,
        `FeelsTrashMan`,
        `FeelsWeirdMan`,
        `forsenS`,
        `hackermans`,
        `monkaChrist`,
        `monkaHmm`,
        `monkaOMEGA`,
        `monkaS`,
        `monkaShh`,
        `nymnSmug`,
        `nymnWeird`,
        `pepeCheer`,
        `pepeFlex`,
        `pepeJAM`,
        `PepeLaugh`,
        `Pepega`,
        `PepegaEZ`,
        `PepegaPhone`,
        `pepeSweat`
    ];

// test existence and type of properties
for (let i = 0; i < pepes.length; i++) {
    // test property existence
    if (!Object.hasOwn(pepe, pepes[i]))
        // missing property
        throw new Error(`error: ${ pepes[i] } is missing.`);

    // test property type
    if (typeof pepe[pepes[i]] !== `string`)
        // wrong property type
        throw new Error(`error: ${ pepes[i] } is not of type string.`);
}

// done
console.debug(`test succeeded, exiting process.`);