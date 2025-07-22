export function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href
}

export function getUrl(name) {
    return new URL(name);
}