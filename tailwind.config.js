/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[data-mode="dark"]'],
    prefix: 'tw-',
    content: ['./projects/**/*.{html,ts}',
        "./node_modules/barsa-sap-ui/**/*.{mjs,ts}",        
    ],
    theme: {
        extend: {          
            backgroundImage: {                
                'login-background': "url('/assets/screenshots/400x822_2.jpg')"
            },
            boxShadow: {
                apple: '2px 4px 12px rgba(0,0,0,.08)',
                'bubble-mine': '4px 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                default: '-4px 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            },
            colors: {
                base: 'rgb(var(--base) / <alpha-value>)',
                'bubble-mine': 'rgb(var(--bubble-mine) / <alpha-value>)',
                default: 'rgb(var(--default) / <alpha-value>)'
            },
            backgroundColor: {
                base: 'rgb(var(--base) / <alpha-value>)',
                'bubble-mine': 'rgb(var(--bubble-mine) / <alpha-value>)',
                default: 'rgb(var(--default) / <alpha-value>)'
            },
            borderColor: {
                'bubble-mine': 'rgb(var(--bubble-mine) / <alpha-value>)',
                default: 'rgb(var(--default) / <alpha-value>)'
            }
        }
    },
    plugins: [require('tailwind-hamburgers')],
};
