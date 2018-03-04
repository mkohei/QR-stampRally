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
        "hamamura": "http://hamalab.info/",
        "iwata": "http://www.lab.kochi-tech.ac.jp/iwatalab/",
        "shikida": "https://www.shikidalab.org/",
        "shinomori": "http://www.lab.kochi-tech.ac.jp/shinolab/",
        "shimizu": "http://www.smzl.info/smzl/",
        "nakahara": "http://www.lab.kochi-tech.ac.jp/knkhrlab/",
        "fukumoto": "http://www.lab.kochi-tech.ac.jp/fukulab/",
        "yokoyama": "http://yokolab.kochi-tech.ac.jp/",
        "ren": "http://xrenlab.com/",
        "ugawa": "http://pl.info.kochi-tech.ac.jp/",
        "kadota": "https://www.facebook.com/HKlabKUT/",
        "kurihara": "http://krlab.info.kochi-tech.ac.jp/",
        "shigemasu": "http://shigelab.com/",
        "takada": "http://www.info.kochi-tech.ac.jp/y-takata/",
        "matsuzaki": "http://ipl.info.kochi-tech.ac.jp/matsuzaki-lab/home.html",
        "mendori": "http://www.lab.kochi-tech.ac.jp/menken/",
        "yoshida": "http://www.lab.kochi-tech.ac.jp/yoshilab/index.html",
        "ueda": "http://www.scinfo.kochi-tech.ac.jp/k-ueda/"
    }[stampID];
}

function STAMP_ID2IMG_FILE(stampID) {
    return "img/" + stampID + ".png";
}