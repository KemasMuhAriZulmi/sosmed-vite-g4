/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


// const config: Config = {
//   content: [
//       "./src/pages//*.{js,ts,jsx,tsx,mdx}",
//       "./src/components//.{js,ts,jsx,tsx,mdx}",
//       "./src/app/**/.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   plugins: [
//       plugin(({ addVariant, config }) => {
//           try {
//               addVariant("autumn", :is(.autumn &));
//               console.log(
//                   "\x1b[1m\x1b[32m%s\x1b[0m",
//                   "Autumn Theme successfully added!"
//               );
//           } catch (error) {
//               console.log(
//                   "\x1b[1m\x1b[31m%s\x1b[0m",
//                   "Error while adding Autumn Theme!"
//               );
//               console.log(error);
//           }
//       }),
//   ],
// };