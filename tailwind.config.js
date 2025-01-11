import { dampM } from "maath/dist/declarations/src/easing";
import { MdPivotTableChart } from "react-icons/md";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        bungee: ['"Voces"', 'sans-serif'],
        balthazar: ['Balthazar', 'serif'],
        dmserif: ['"DM Serif Text"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        potta: ['Potta One', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
        sourgummy: ['Sour Gummy', 'cursive'],
        russo: ['Russo One', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        transitionEffect: 'transitionEffect 2s ease-in-out forwards',
        loadingBar: 'loadingBar 5s linear forwards',
        blink: 'blink 0.7s step-start infinite',
        lightPulse: 'lightPulse 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        glowText: 'glow-text 5s linear infinite',
        twinkling: 'twinkling 2s infinite ease-in-out',
        falling: 'falling 3s ease-in-out forwards',
        'bg-move': 'bg-move 20s infinite ease-in-out',
        'nebula-move': 'nebula-move 15s infinite ease-in-out',
        glowWelc: 'glowWelc 5s ease-in-out infinite alternate',
        glowBtn: 'glowBtn 5s linear infinite',
        flying: 'flying 15s infinite ease-in-out',
      },
      keyframes: {
        transitionEffect: {
          '0%': { opacity: '1', transform: 'scale(1)', backgroundColor: 'rgba(0, 0, 0, 1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.5)', backgroundColor: 'rgba(0, 0, 0, 1)' },
          '100%': { opacity: '0', transform: 'scale(1)', backgroundColor: 'rgba(0, 0, 0, 1)' },
        },
        loadingBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        lightPulse: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0.8',
          },
        },
        glowText: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowWelc: {
          '0%': {
            textShadow: '0 0 5px rgba(230, 7, 7, 1), 0 0 10px rgba(230, 7, 7, 1)',
          },
          '50%': {
            textShadow: '0 0 10px rgba(230, 7, 7, 0.7), 0 0 20px rgba(230, 7, 7, 0.7)',
          },
          '100%': {
            textShadow: '0 0 5px rgba(230, 7, 7, 1), 0 0 10px rgba(230, 7, 7, 1)',
          },
        },
        glowBtn: {
          '0%': {
           'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        twinkling: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        falling: {
          '0%': {
            opacity: '0',
            transform: 'translate(0, 0)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'bg-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '50% 100%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'nebula-move': {
          '0%': {
            transform: 'translate(-60%, -60%) scale(1.2)',
          },
          '25%': {
            transform: 'translate(-50%, -50%) scale(1.5)',
          },
          '50%': {
            transform: 'translate(-40%, -40%) scale(1.3)',
          },
          '75%': {
            transform: 'translate(-50%, -50%) scale(1.4)',
          },
          '100%': {
            transform: 'translate(-60%, -60%) scale(1.2)',
          },
        },
        flying: {
          '0%': {
            transform: 'scaleY(1.0) scaleX(1.0)',
          },
          '25%': {
            transform: 'scaleY(1.1) scaleX(1.02) translateX(1px) rotate(10deg)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'scaleY(1.2) scaleX(1.1) rotate3d(1, 1, 0, 25deg)',
            opacity: '1',
          },
          '75%': {
            transform: 'scaleY(1.1) scaleX(1.05) translateX(-5px) rotate(-10deg)',
            opacity: '0.9',
          },
          '100%': {
            transform: 'scaleY(1.0) scaleX(1.0)',
          },
        },
        spinCircle: {
          '0%': { transform: 'translateY(20px)' },
          '25%': { transform: 'translateY(22px)' },
          '50%': { transform: 'translateY(30px)' },
          '75%': { transform: 'translateY(27px)' },
          '100%': { transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
};
