/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'tower': "url('/tower.avif')", // Define uma imagem de fundo personalizada
            },
            from: {
                'tower': "url('/tower.avif')",
            },
            padding: {
                '2.5': "10.5px", // Define um novo valor de padding
            },
            colors: {
                'trac-blue': '#025ef4',  // Define sua cor personalizada
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'], 
                'jetbrains': ['JetBrains Mono', 'monospace'], // Adiciona a família de fontes JetBrains Mono
            }
        },
    },
    plugins: [],
}
