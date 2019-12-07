import colors from './colors'

const tagsSpliter = (tags) => {
    return tags.split(/[\s, \-\/\;\:]+/);
}

const generateTagsColor = (tags) => {
    const colorsList = Object.values(colors);
    const tagsColored = {};

    return tags.map(el => ({ color: colorsList[el.length % colorsList.length], name: el }));
} 
