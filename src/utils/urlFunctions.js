export function getImgUrl(name) {
    return new URL(`../assets/projects/${name}`, import.meta.url).href
}

export function getUrl(name) {
    return new URL(name);
}