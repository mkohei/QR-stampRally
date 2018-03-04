/**
 * cookie文字列を解析し，連想配列で返す
 * @param {String} allcookies 
 * @returns {Array} cookie data
 */
function parseCookie(allcookies) {
    var result = [];
    var cookies = allcookies.split('; ');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");

        result[cookie[0]] = decodeURIComponent(cookie[1]);
    }
    return result;
}

/**
 * 指定したcookie連想配列を削除
 * @param {Array} cookies 
 */
function deleteCookie(cookies) {
    age = "=;max-age=0"
    for (key in cookies) {
        document.cookie = key + age;
    }
}