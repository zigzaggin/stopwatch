export function persistWatches(watches) {
    localStorage.setItem('watches', JSON.stringify(watches));
}

export function loadWatches() {
    return JSON.parse(localStorage.getItem('watches') || "[]");
}

export function saveMarks(marks) {
    localStorage.setItem('marks', JSON.stringify(marks));
}

export function loadMarks() {
    return JSON.parse(localStorage.getItem('marks') || "[]");
}

export function saveConfig(config) {
    let configs = JSON.parse(localStorage.getItem('configs') || "{}");
    configs[config.guid] = config;
    localStorage.setItem('configs', JSON.stringify(configs));
}

export function loadConfig(guid) {
    return JSON.parse(localStorage.getItem('configs') || "{}")[guid];
}