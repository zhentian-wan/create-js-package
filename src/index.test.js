import sensitiveWord from './index';

test('replaces blacklisted words with asterisks', () => {
    expect(sensitiveWord('The name of the NX will be the Nintedo Switch', ['Switch']))
        .toBe('The name of the NX will be the Nintedo ***')
});

test('replaces blacklisted words with asterisks', () => {
    expect(
        sensitiveWord(
            'The name of the NX will be the Nintedo Switch. The switch will be awesome.',
            ['Switch'])
    ).toBe('The name of the NX will be the Nintedo ***. The *** will be awesome.')
});