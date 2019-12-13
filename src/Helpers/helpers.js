import colors from './colors'

const stringToHash = (string) => { 
    var hash = 0; 
      
    if (string.length === 0) return hash; 
      
    for (let i = 0; i < string.length; i++) { 
        let char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
      
    return Math.abs(hash); 
}

export const tagsSpliter = (tags) => {
    return tags.split(/[^a-zA-Z\d:#]+/).map(tag => tag.toUpperCase());
}

export const adminSpliter = (admins) => {
    return admins.split(/[^a-zA-Z\d:@./\-_]+/).map(tag => tag.toLowerCase());
}

export const generateTagsColor = (tag) => {
    const colorsList = Object.values(colors);
    return { color: colorsList[stringToHash(tag) % colorsList.length], name: tag };
}