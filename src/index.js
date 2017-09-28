export default (content, words) => {
    return content.replace(
        new RegExp(words.join('|'), 'gi'),
        '***'
    );
}