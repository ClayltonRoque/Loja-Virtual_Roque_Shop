import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webekit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto Mono',
        fontWeight: 400,
    }
})