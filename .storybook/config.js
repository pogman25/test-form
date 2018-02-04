const { configure } = require('@storybook/react');
const req = require.context('../src', true, /\.stories\.jsx?$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
