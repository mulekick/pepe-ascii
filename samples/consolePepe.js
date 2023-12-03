// import primitives
import console from "node:console";

// import module
import pepe from "../pepe-ascii.js";

try {

    // log pepe
    console.log(pepe.FeelsAmazingMan);

} catch (err) {
    console.error(err.message);
}