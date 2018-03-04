STAMP_ID = [
    "hamamura",
    "iwata",
    "shikida",
    "shinomori",
    "shimizu",
    "nakahara",
    "fukumoto",
    "yokoyama",
    "ren",
    "ugawa",
    "kadota",
    "kurihara",
    "shigemasu",
    "takada",
    "matsuzaki",
    "mendori",
    "yoshida",
    "ueda"
];

function STAMP_ID2A_ID(stampID) {
    return stampID;
};

function STAMP_ID2IMG_ID(stampID) {
    return stampID + "_stamp";
};

function STAMP_ID2HP(stampID) {
    return {
        "hamamura": "http://hamalab.info/"
    }[stampID];
}

function STAMP_ID2IMG_FILE(stampID) {
    return "img/" + stampID + ".png";
}