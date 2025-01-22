import typography from "@tailwindcss/typography"
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
              lightBlue: '#59e0f7',
              blueCustom: "#0D76BC",
              redCustom: '#D71821',
            },
            fontFamily: {
                "dancing": ["Dancing Script", "serif"],
                "poppins": ["Poppins", "serif"],
                "nautigal": ["The Nautigal", "serif"],
                "marker": ["Permanent Marker", "serif"],
                "inter": ["Inter", "serif"]
                
            }
          },
    },

    plugins: [
        typography,
    ],
};
