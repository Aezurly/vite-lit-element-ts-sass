import { unsafeCSS, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
const styles = ":root {\n  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color-scheme: light dark;\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #242424;\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\n\na:hover {\n  color: #535bf2;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 320px;\n  min-height: 100vh;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n}\n:host {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n\n.logo {\n  height: 300px;\n  padding: 1.5em;\n  will-change: filter;\n}\n\n.logo:hover {\n  filter: drop-shadow(0 0 2em rgba(100, 108, 255, 0.6666666667));\n}\n\n.logo.lit:hover {\n  filter: drop-shadow(0 0 2em rgba(50, 92, 255, 0.6666666667));\n}\n\n.card {\n  padding: 2em;\n}\n\n.read-the-docs {\n  color: #888;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\n\na:hover {\n  color: #535bf2;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\n\nbutton:hover {\n  border-color: #646cff;\n}\n\nbutton:focus,\nbutton:focus-visible {\n  outline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n  }\n}";
const litLogo = "data:image/svg+xml,%3csvg%20id='Calque_1'%20data-name='Calque%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20823.19%20793.33'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23721316;}.cls-2{fill:%23d23442;}.cls-3{fill:%23e0272c;}.cls-4{fill:%23dc252a;}.cls-5{fill:%236b809d;}.cls-6{fill:%23212b42;}.cls-7{fill:url(%23Dégradé_sans_nom_3);}.cls-8{fill:%23231f20;}.cls-9{fill:url(%23Dégradé_sans_nom_2);}.cls-10{fill:%23b0d1ee;}%3c/style%3e%3clinearGradient%20id='Dégradé_sans_nom_3'%20x1='388.31'%20y1='780.27'%20x2='426.14'%20y2='818.11'%20gradientTransform='matrix(1,%200,%200,%20-1,%20-89.63,%20901)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23d23442'/%3e%3cstop%20offset='0.25'%20stop-color='%23f27421'/%3e%3cstop%20offset='0.51'%20stop-color='%23f9bd14'/%3e%3cstop%20offset='0.73'%20stop-color='%23179ab2'/%3e%3cstop%20offset='1'%20stop-color='%234b4fa0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='Dégradé_sans_nom_2'%20x1='404.61'%20y1='800.55'%20x2='384.64'%20y2='823.51'%20gradientTransform='matrix(1,%200,%200,%20-1,%20-89.63,%20901)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fff'/%3e%3cstop%20offset='0.92'%20stop-color='%2337b34a'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M910.52,314.39v-14'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-2'%20d='M753.93,301.51c-22.77-2.53-59.1-14.94-62.55-4.37a71.48,71.48,0,0,0-.69,9.89c-1.37,4.37-3.44,8.05-8.5,8.51h-8.74a9.64,9.64,0,0,1-7.36-7.36V251.84c.46-5.06,4.14-7.35,8.51-8.5h7.82a13.55,13.55,0,0,1,8.5,8.5c.46,4.37-.92,8.74.69,13.11,19.55,10.12,45.76,10.58,67.61,15.64,29,4.6,57.94,11.72,86.92,12.64,7.13-7.35,15.17-12.87,25.75-14.25,3.68,0,7.13-1.15,10.81,0a52.31,52.31,0,0,1,16.09,6.9c8.05,5.28,11.73,13.1,14,22.3v14a34.16,34.16,0,0,1-29.2,29.2h-14a8.34,8.34,0,0,0-9,3.91c-4.6,6-10.11,10.81-15.17,16.32-12,13.11-24.38,26-36.56,38.87-13.57,14.48-27.37,29.2-40.7,43.91-3,3.22-5.52,6.9-9,9.89-2.53,2.3-2.53,4.6,0,6.67a31.54,31.54,0,0,1,11.27,19.09v15.17c-2.07,10.35-8.28,18.17-15.18,25.3-6,6.2-11.27,12.87-17.25,19.08-3.68,3.91-9.42,2.53-11.95-2.3v-6.67c2.76-6.43,8.27-10.8,12.64-16.09,3.91-4.83,7.82-9.43,12-14,2.76-2.76,3-6.67,4.83-9.66a6.55,6.55,0,0,0,0-7.58c-2.76-9.43-11.5-14-17.94-20a46.35,46.35,0,0,0-14.48-10.35c-1.61-1.61-3.68-.46-5.29-1.15l-8.51-14.94c5.06,0,10.12-.23,14.95-.23a54.45,54.45,0,0,1,16.09,7.58c2.53,1.61,4.14,0,5.75-1.6,6.21-7.36,12.65-14.72,18.86-22.31,8.27-9.66,16.09-19.54,24.14-29.43l30.35-36.56c7.59-9.2,14.95-18.17,22.77-27.14,1.61-2.07,2.53-4.37,1.15-6.21-4.14-6.43.46-10.57-3.68-12.64-9.89-4.6-12.88-5.06-32.65-8.28C789.11,307.49,771.41,303.35,753.93,301.51Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-2'%20d='M90.08,432.81c-3.91-21.84,18.4-43,40.7-39.78,5.06,1.61,10.12,2.53,14.72,5.06,2.76,1.61,4.83-1.15,6.43-2.53,9.89-8.28,19.55-16.79,29.67-25.07,12.18-10.34,24.83-20.46,37-30.58,9.89-8.28,19.54-16.78,29.66-25.06,12.42-10.58,25.07-20.7,37.48-31a77.64,77.64,0,0,0,6-6.21c1.84-5.29.46-10.81.69-16.33a10.38,10.38,0,0,1,8.51-7.36h7.82a13.57,13.57,0,0,1,8.5,8.51v55.19a10.23,10.23,0,0,1-8.5,8.51h-7.82c-4.83-.92-7.36-3.91-8.74-8.28-1.61-4.14-4.14-4.6-7.36-2.07l-38.63,31c-12.64,9.89-25.06,19.78-37.48,29.66-11.5,9-22.76,17.94-34.26,27.14-4.14,4.14-16.33,8.5-12.65,16.09,4.6,13.34-6.21,23,9.89,32,16.1,11.72,31.27,23.91,46.45,36.33,2.76,2.3,4.83,1.61,6.21-.46a35.17,35.17,0,0,1,23.22-15h14l7.36,2.3v18.4c-2.53-1.61-5.06-3-7.36-4.37a15.41,15.41,0,0,0-12,0c-12.65,4.6-17,16.55-23.91,26.21-5.52,7.82-5.06,15.18-.92,23,2.53,4.6,6.9,7.13,10.8,9.89,7.82,5.29,15.87,10.35,23.69,15.64a9.43,9.43,0,0,1,4.6,4.83V574a4.11,4.11,0,0,1-4.14,4.13h-6.67c-12.65-8.5-26.21-15.4-37.25-26.21a30.07,30.07,0,0,1-9.2-19.08v-12c-.23-3.91,1.61-7.36,3.45-10.81,1.38-2.76,1.61-4.37-1.61-6.44-19.54-13.56-38.4-27.36-57.94-41.16-1.61-1.15-3.45-2.53-6.21-.46a15.08,15.08,0,0,1-8.74,3.22C114.91,470.29,91.23,456,90.08,432.81Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-3'%20d='M674.6,465a64.74,64.74,0,0,0-13.11,15.41v6.67c2.76,6.21,9.43,6.44,14.26.69,1.38-1.61,2.07-4.6,4.83-3.91A62.17,62.17,0,0,0,674.6,465Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-4'%20d='M307.61,498.8c4.6,4.37,4.6,7.59.23,12.88C307.61,507.31,307.61,503.17,307.61,498.8Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-5'%20d='M466.5,200.11c2.76,5,8.28,7.58,12.19,11.72a7.88,7.88,0,0,1,2.76,6.21c0,18.63,0,37.48-.23,56.11,0,3.45.46,5.29,4.59,5.06,3.68-.23,6.44.23,6.44-5.06-.23-20.24-.46-40.7,0-60.71,0-4.37-2.76-5.29-5.06-7.36-8.27-6.2-6.43-18.85,1.61-22.76a14.18,14.18,0,0,1,18.4,6.21,13.06,13.06,0,0,1-4.14,17c-3.45,2.07-4.14,4.6-4.14,8.28.23,20.24,0,40.24,0,60.48,0,2.3-.46,4.6,3.45,4.37,3.45-.23,4.14-1.61,4.14-4.6-.23-11.73.92-23.92-.46-35.41-.92-9,3.68-13.57,9.43-17.71,3-2.3,4.14-3.91,2.76-7.82-1.84-6.21,4.83-14.48,11.49-15.17s14.72,5.51,15.18,12.41c.69,10.58-7.36,16.79-17.48,13.57a6.4,6.4,0,0,0-6.66,1.15c-4.83,4.14-8.74,8-8.28,15.64a335.42,335.42,0,0,1,.23,34c0,3.22.69,4.14,4.14,4.14,15.17-.23,30.58-.23,45.76,0,4.13,0,6.2-2.76,8.27-5.06,3.91-4.14,8.51-7.82,5.75-15.41-2.53-6.67,4.83-14.71,12-14.94,5.52-.23,14,5,14.49,13.56.46,7.59-5.06,14-13.11,13.11-6-.46-9.2,1.61-12.42,6.21-3.45,5.06-7.59,8.51-15.17,8.05-14.72-.92-29.44-.23-44.15-.46-4.37,0-6.44,1.15-5.75,5.74a17,17,0,0,1,0,4.83c-.46,3,.92,3.68,3.68,3.68,20.23,0,40.7-.23,60.7,0,3.68,0,4.83-2.3,6-4.37,3.91-7.36,14.49-7.81,20.47-2.76,4.82,4.14,4.82,9.43,3.68,14.72-.92,4.83-5.06,7.59-10.12,8.28-6,.69-11.5-.46-14-6.21-1.84-3.91-4.37-4.6-8.28-4.6-18.39.23-37,0-55.41,0h-3.22c-2.76,0-3.22,1.61-3.45,3.91-.23,2.76,1.61,2.76,3.45,2.76,12.64,0,25.06.23,37.71-.23a9.45,9.45,0,0,1,8.28,3.68,12.1,12.1,0,0,0,2.76,3.22c3.9,4.14,6.66,10.35,14.94,8.51,6.21-1.38,13.11,7.58,12.88,14a14.07,14.07,0,0,1-13.34,12.65c-8,0-13.56-5.06-13.56-12.88V336c.91-3,3.21-6.21-.46-9-5.29-4.14-7.36-12.65-17.25-11.27s-20.47.46-30.58.23c-3.45,0-4.83,1.15-4.83,4.6.23,18.85,0,37.71,0,56.56a6,6,0,0,0,2.07,5.06c2.07,1.84,3.91,3.91,6.21,6.21,3.44,3.22,5.51,7.36,12.18,4.6,5.06-2.3,10.81.46,14,6a12.76,12.76,0,0,1-.46,15.17,13.85,13.85,0,0,1-17,3.68,14.21,14.21,0,0,1-7.35-14.71c.46-2.76-5.29-12-8-12.19-2.07,0-1.84,1.61-1.84,3,0,7.36-.23,14.26,0,21.61a8.21,8.21,0,0,1-4.37,8.28,12.05,12.05,0,0,0-6.44,12.42c.46,7.36-1.84,10.35-8.74,12.65a13.66,13.66,0,0,1-15.17-4.37c-3-3.91-3-12.19,0-16.33,3.68-5.06,8.5-6.44,14.94-4.37,5.06,1.61,13.34-4.37,13.34-9.43.23-9.65,0-19.54,0-29.2a4.56,4.56,0,0,0-2.07-4.37c-3.91-3-7.13-6.67-10.58-9.89-1.61-1.6-1.38-3.67-1.38-5.51,0-14.49-.23-29.21,0-43.69,0-3.91-.92-5.75-5.29-5.75s-5.51,1.38-5.51,5.52c.23,19.54-.69,38.86.46,58.17.46,8.51-3.68,13.11-9,17.48-2.3,1.84-3.45,2.76-2.53,6.21,2.07,7.36-2.76,14-10.12,16.09a13.75,13.75,0,0,1-15.41-9c-2.53-7.59.23-13.8,7.13-17a12.74,12.74,0,0,1,8.74-.46c5.52,1.61,14-3.91,14-9.66.23-20.92,0-41.85.23-63,0-3.45-1.61-4.14-4.6-4.14q-17.59.34-35.18,0c-3.91,0-5.29,2.53-7.36,4.6-3.68,3.91-6.9,7.36-5.06,13.79a11.78,11.78,0,0,1-8.05,14.72c-.69.23-1.15.23-1.84.46-7.13,1.38-14.25-2.76-15.86-9.2-2.07-8.28,1.61-15.17,9.19-17.47a7.16,7.16,0,0,1,5.75.23c1.38.69,3,1.15,3.91.23,1.61-1.61,5.06-2.76,4.37-5.52-.46-2.76-3.68-1.38-5.75-1.61h-2.76c-7.59.92-14-.23-18.16-7.82-1.84-3.45-4.83-4.6-9.43-3.22-6.9,1.84-14-5.52-14.49-13.57-.23-6.43,6-12.64,12.42-13.33,9-1.15,18.4,9.42,13.34,19.54a3.56,3.56,0,0,0,.69,4.6,14.26,14.26,0,0,1,3.91,5.06,7.26,7.26,0,0,0,7.35,3.68,56.06,56.06,0,0,1,12.42,0c6,.69,9.43-2.07,12.19-6.44a10.91,10.91,0,0,1,10.57-5.52c8.74.46,17.48,0,26.22.23,3.91.23,5.52-1.38,5.06-5.29v-4.83c.23-2.75-.92-3.9-3.91-3.9H431.32c-2.53,0-3.22,1.38-4.37,3.21-3.91,7.36-11.27,9.43-18.86,6.21-5.29-2.53-8.5-11.26-6.21-17.47a13.41,13.41,0,0,1,17.71-6.67,13,13,0,0,1,6.67,6.44,6,6,0,0,0,6.21,3.45c11.49-.23,23-.46,34.49,0,5.29.23,7.36-1.15,7.13-6.9q-.69-24.5,0-49a12.61,12.61,0,0,0-6.67-12.19,33.65,33.65,0,0,1-3-2.07A85.41,85.41,0,0,1,466.5,200.11Zm39.78,143.94V319.91c0-2.76-.69-4.37-3.91-4.37-3,0-3.91,1.84-3.91,4.6V365a6.45,6.45,0,0,0,5.29,6.43c3.45.23,2.07-3.9,2.07-6.2C506.28,358.08,506.28,351.18,506.28,344.05Zm-69.44-34h34c2.53,0,4.37-.23,4.37-3.45s-2.3-3.22-4.6-3c-7.59,0-14.95.23-22.77,0-4.83-.46-8.27.92-11,6.44Zm57.94-107.61c3.91.23,8.05-3.45,8.28-6.9.23-2.76-5.06-8.28-8.05-8.28s-7.13,3.91-7.13,8.05a6.88,6.88,0,0,0,6.44,7.13Zm101.87,55a8.11,8.11,0,0,0-7.13-7.59c-3.45,0-6.9,3.91-6.9,7.82,0,4.14,2.76,7.36,6.44,7.36C593.2,264.26,596.42,261.27,596.65,257.36ZM384,298.29c3.91,0,8.05-3.91,7.82-7.36-.23-2.76-5.29-8-7.82-7.81s-7.36,5.51-7.36,8.27a6.88,6.88,0,0,0,6.67,6.9Zm31-9.66c3.91,0,8.05-3.44,8.28-6.89.23-3-3.91-7.13-7.36-7.36-3.91-.23-8.28,3.91-7.82,7.59S410.39,288.86,415,288.63ZM593.89,308c3.91,0,8.28-3.91,8.28-7.36a8.81,8.81,0,0,0-7.59-6.9c-3.68,0-7.82,3.91-7.36,7.36C587.68,305.19,589.06,308.41,593.89,308Zm-136.82,90.6c-4.37,0-6.9,2.76-6.9,7.36a5.6,5.6,0,0,0,5.06,6.43h1.38c4.83,0,7.36-2.75,7.36-7.58C464,400.16,461.44,398.32,457.07,398.55Zm86,6.21c0-3-3.91-7.36-6.44-7.36a8.17,8.17,0,0,0-7.36,8.74q.35,6.56,6.9,6.2C539.85,412.11,542.84,408.9,543.07,404.76Zm35.18-59.1c3.91,0,7.82-3.68,7.82-6.9a8.35,8.35,0,0,0-7.82-7.13c-3.68,0-7.59,4.14-7.13,7.59C571.81,343.36,574.11,346.12,578.25,345.66ZM410.16,328.42a7.91,7.91,0,0,0-7.36,7.35c0,3.91,3,6.44,7.36,6.44,3.68,0,8.28-3.91,7.59-7.36-.92-3.22-3-6.43-7.59-6.43ZM531.57,218.27c3.91,0,7.82-3.22,7.82-6.9a8,8,0,0,0-7.82-7.12c-3.22,0-6.9,3.9-7.13,7.35C524.44,216,527,218.27,531.57,218.27Zm-44.15,224.2c4.6.23,9-3.68,9-6.9s-3.91-7.13-7.36-7.13a7.94,7.94,0,0,0-7.58,7.36A6.11,6.11,0,0,0,487.42,442.47Zm-6-151.08c.23,3.22-1.61,7.36,5.05,7.13,5.52-.23,6.21-2.3,6-6.9-.23-3.91.92-7.58-5.52-7.58S481.45,287.48,481.45,291.39Zm24.83.46v-2.53c0-2.75.69-5.05-3.91-5.05s-3.91,2.53-3.91,5.05v5.29c.23,1.38-.69,3.22,1.38,3.45,1.61.23,3.91.69,5.29-.23C507.43,296.45,505.82,293.46,506.28,291.85ZM486.5,310c2.53-.23,5.52.69,5.75-3,.23-4.37-3.22-3.22-5.75-3.45s-5.05-.23-5.05,3.68C481.22,311.86,484.89,309.33,486.5,310Zm15.64,0c2.3.23,4.14-.46,4.14-3.22s-1.61-3-3.91-3.22c-2.76,0-3.68,1.38-3.68,3.91C498.46,310.25,500.07,310.25,502.14,310Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M638,641.14'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M712.31,646.66c-1.61-2.3-4.6-2.76-6.21-4.83H642.64a4.27,4.27,0,0,1-5.29-2.3,4.57,4.57,0,0,1-.23-2.53V599.06a34.39,34.39,0,0,1,11.49-12.19c17-10.34,33.35-21.61,50.59-31.5,8.74-5.06,12.19-12.65,14.49-21.15V474.89c-3.68-22.53-22.77-39.78-45.3-44.15-26.44-2.07-47.83,17-55.19,42.08v30.12c5.06,12,19.32,12.19,23.92,0,0-2.3-.23-4.6-.23-7.13a35.4,35.4,0,0,1-.23-5.05,74.82,74.82,0,0,1,.69-10.12,48,48,0,0,1,3-11.27c4.6-11.73,12.87-19.31,22.07-19.31,13.8,0,25.07,16.78,26,37.94a2,2,0,0,1,0,1.61v40.93a28,28,0,0,1-8.51,8.73c-13.57,8.74-27.37,17-40.7,26-10.35,6.9-22.77,11.73-27.37,25.06v63.93c2.07,6.43,5.29,12,12.88,12.87h77.49C711.85,665.74,719.44,656.78,712.31,646.66Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M411.54,718.86a31.17,31.17,0,0,0-.46-4.6c-.69-1.38-6-1.15-7.13-1.15H300.71c-3,1.61-5.06,4.37-7.59,6.67.46,8.28-3,20,6.67,24.37h55.88c3.21.46,4.13.69,6.43,1.15,14.26,5.06,20.93,10.81,23.92,26,0,13.1,1.61,28.51-7.82,38.86-4.83,6-12.42,9-20.23,9.43H281.62c-8.73-5.52-9.19-12.88-1.15-19.55h75.2c16.09-3.22,11.49-17.47,11.95-29.89a17.64,17.64,0,0,0-9.88-8.74H299.79c-6.21-.46-11.5-4.14-16.33-6.9-7.13-3.45-7.36-12.87-10.11-19.31-.23-3.91-.69-9.89-.92-14,4.13-15.64,10.8-24.14,26.44-28H463.74a23.28,23.28,0,0,1,8.05,9c-.23.69-.23,1.61-.46,2.53-2.3,2.76-3.68,6.9-7.59,8H432.47l-.92.92v97c-.92,5.06-4.37,8-9.66,9.43h-1.84a13.65,13.65,0,0,1-8.05-7.13C411.54,781.87,411.54,750.36,411.54,718.86Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M392.23,525.71a55.19,55.19,0,0,1,37.94-36.33,3.91,3.91,0,0,1,1.61-.23c5.06-.23,9.65-.23,14.71,0a13.57,13.57,0,0,1,3.22.46c6.44,2.53,12.88,4.82,18.63,9,11.27,8.28,17.24,20,19.77,33.58,2.3,17-16.09,20.69-22.3,9.88a7.92,7.92,0,0,1-.92-4.6,10.7,10.7,0,0,0-.46-3.9c-2.76-9.89-8.51-18.17-18.4-20.7a29.29,29.29,0,0,0-12.64,0c-8.05,1.15-12.65,8.51-16.79,15.18a4.64,4.64,0,0,0-.69,2.53c-.23,3.91,0,14.25.23,20.46,0,3,0,7.36.92,9.2,1.61,2.76,4.6.92,6.21.23,2.76-1.38,5.75-1.61,8.28-2.76,52.65-8,74.5,63.92,40.7,97-28.06,27.82-75.88,6.66-80.94-33.12a3.91,3.91,0,0,1-.23-1.61V532.61A16.76,16.76,0,0,1,392.23,525.71Zm41.16,115.43C466.73,651.72,475,589.86,445.11,583c-32.42-9.65-41.39,50.82-11.72,58.18Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M510.65,665.74a13.82,13.82,0,0,1-8.51-8.27V657a20.78,20.78,0,0,1-.92-6.44V616.08c2.53-10.58,11.73-14,19.55-18.63,15.63-9.43,31.5-18.86,47.13-28.51,5.06-3,9.43-6.9,11-12.88V535.82c-1.84-10.57-8.74-17-17.93-21.38a33.88,33.88,0,0,0-19.09,1.61,42.45,42.45,0,0,0-8.51,7.13,22.55,22.55,0,0,0-6.21,15.4h0V539c-1.38,3.91-1.84,8.28-6.43,10.81-7.36,3.91-14,1.61-17-6.67a.8.8,0,0,0-.23-.46,7.56,7.56,0,0,1-.92-3.91v-.46a37.22,37.22,0,0,1,1.61-10.11,78.06,78.06,0,0,1,6.67-15.64c8-13.11,17.7-20.69,32.42-22.76,5.75-.92,9.43-.46,12.88-.69a58.83,58.83,0,0,1,6.21,1.15A45.32,45.32,0,0,1,578.48,497c12.19,7.36,18.86,18.4,23,31.05.23,11.72.46,22.76.69,34.49-2.53,8.74-5.75,16.55-14.72,22.07-18.63,11.73-37.94,22.54-57.26,33.35h0a5.91,5.91,0,0,0-3,4.36,43.56,43.56,0,0,0,.69,18.86v.23c.69.92,2.76.69,4.14.69h54A19.06,19.06,0,0,1,599,646.43a10.18,10.18,0,0,1,2.76,3.45c.23,2.53.23,4.83.46,7.36a15.1,15.1,0,0,1-5.75,7.35,18.1,18.1,0,0,1-9.66,2.76H516.4A37.14,37.14,0,0,1,510.65,665.74Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M600.33,700.24c7.58-10.58,10.57-10.81,19.77-1.15,24.61,24.6,45.76,52.88,70.82,76.57H696a5.18,5.18,0,0,0,3.45-3.45c1.61-.92.92-2.53.92-3.91V702.53c.46-.46.92-.69.92-1.15,1.84-11.49,16.1-10.57,18.4.23V811.53c-1.38,3-1.38,6.9-4.6,9-4.6,3-13.57,1.38-17-4.37-2.76-5.06-7.36-8.74-11-12.88-19.32-21.84-39.32-43-58.18-65.3-4.14-3.22-8.05.46-10.58,3.45v73.12c-2.53,2.3-2.76,6.21-6.44,7.59h-5.28a14.53,14.53,0,0,1-6.44-6.44Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M503.29,715.18c-10.58,9.66-11,23.92-15.64,36.1-6.89,17.25-11.95,35.41-18.39,53.12-1.15,3-2.53,8.05-3.45,10.81s-3.68,3.45-5.75,4.83h-6.21c-5.75-3.68-6.67-5.75-4.37-12.42,11-32.88,22.31-65.53,33.35-98.42,2.29-6.9,6.2-12.41,12.87-15.4h40.93c10.35,5.06,12.65,15.86,16.56,25.06,11.5,26.67,21.61,54,32.65,80.94,2.76,7.82,11,17,.46,22.77-1.38.23-2.53.46-3.91.69-7.36-.46-8.74-5.06-10.58-9.89-4.83-12.65-9.88-25.07-14.94-37.48-1.61-3.68-5.06-6-7.59-8.51H503.06c-7.82-6.44-7.36-9.43,2.07-16.1,9.43,0,18.86.23,28.28,0,1.84,0,4.14.92,6-.92,4.83-2.53,5.75-6.21,3.68-10.57-3.22-7.13-4.14-14.95-9.2-21.16a10.17,10.17,0,0,0-7.82-3.68C518.47,714.49,510.65,713.34,503.29,715.18Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M473.4,892.24H432a5.2,5.2,0,0,1-5.29-5.29V840.73a9.78,9.78,0,0,1,.46-2.53,5.1,5.1,0,0,1,5.06-3H468.8a3.41,3.41,0,0,1,1.61.23c12,1.61,16.78,6.9,16.78,15.41a7.31,7.31,0,0,1-.46,3.22,25.84,25.84,0,0,1-3.68,6.44,4.91,4.91,0,0,0,.69,5.75,17,17,0,0,1,3.22,5,9.64,9.64,0,0,1,.92,3.68,18.15,18.15,0,0,1-13.56,17C474.32,892.24,473.86,892.24,473.4,892.24ZM437.53,849c-1.15,1.38-.92,12.42-.92,19.54,0,5.29-.92,15,3.91,15a33.76,33.76,0,0,0,4.82.23q11,.35,22.08,0a44.14,44.14,0,0,0,5.06-.69c6.21-1.38,9.43-10.12.92-14.26-4.6-1.61-16.56,0-24.15-.46-2.76-.23-4.37-.92-4.83-3.9a3.89,3.89,0,0,1,3.68-4.14h.23c8.05-.23,16.1,1.38,24.15-.46a7.46,7.46,0,0,0,5.52-9,8,8,0,0,0-2.76-4.37c-.23-.23-.46-.23-.69-.46a23.17,23.17,0,0,0-5.75-.69c-7.82-.23-15.87-.23-23.69,0a13.29,13.29,0,0,0-4.36.69c-1.61.23-2.53,1.61-3.22,3Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M498,864.19c-2.07-41.39,74.27-38.41,69.21,3C562.85,903.28,496.39,901.44,498,864.19ZM557.33,861c-2.76-27.14-60-20.24-49.67,8.5,4.83,23.92,56.8,17.25,49.67-8.5Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M374.75,836.13c38.4-13.56,61.86,46.91,18.4,56.34C349.69,906,327.15,841.19,374.75,836.13Zm-17,33.34c5.05,24.38,57.94,17,49.66-9.65C402.57,834.52,347.85,840.27,357.74,869.47Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M297.49,876.14a3.84,3.84,0,0,1,1.15-7.59h24.6a13.22,13.22,0,0,0,6.67-7.81A17.55,17.55,0,0,0,327.15,849a19.36,19.36,0,0,0-6.21-5.06H290.13c-3,1.15-4.83,2.53-5.52,5.52V889c-.46,6.21-8.74,6.21-8.74-2.07V844a8.35,8.35,0,0,1,2.76-6.44l.46-.46a7.16,7.16,0,0,1,4.14-1.61H319.1a49.46,49.46,0,0,1,5.29.46c12.19,4.83,14,21.85,12.88,26.45-1.38,5.74-3.22,6.2-6.67,10.8-4.37,5.75,4.14,11.73,5.06,14.26.46,1.61,1.61,2.76-.23,4.83-5.06,5.75-16.1-11.5-19.77-14.72C309.68,874.76,303.47,876.6,297.49,876.14Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M658.73,886.72c7.36-6.67,14.95-13.11,21.39-20.69,2.3-2.53,1.15-5.06-.92-7.36A172.3,172.3,0,0,1,663.1,843c-1.61-1.61-2.76-3.91-.46-6.21s4.14-1.38,6.21.46c5.75,5.29,11,11,17.25,16.1a5.17,5.17,0,0,0,7.35.92c8-6,13.34-15.41,22.77-19.55h.23a3.67,3.67,0,0,1,3,4.14,2.84,2.84,0,0,1-.92,1.84c-21.62,23.92-30.81,16.56-.46,43.92,2.07,2.07,4.37,4.14.46,7.36-3.22,2.53-5.29-.46-6.44-1.61-6.21-6.21-13.57-10.58-18.63-17.71-2.3-3-5.74-1.84-8,.46a178.64,178.64,0,0,1-19.78,17.71,6.25,6.25,0,0,1-3.91,1.38h0a3.09,3.09,0,0,1-3.22-3A1.8,1.8,0,0,1,658.73,886.72Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M576.87,843.72c-2.76,0-3.91-.92-4.14-3,0-.46-.23-2.3-.23-2.76,0-1.61,1.61-3.22,5.75-3.22,13.11.23,27.37,0,40.93.23,3.91,0,6.44,3,6.44,4.83,0,1.61-2.53,4.37-6.44,4.37-3.45,0-6.21-.46-10.12-.46-5,0-6.66,1.61-6.66,4.6v40.47a3.46,3.46,0,0,1-.92,2.53,3.62,3.62,0,0,1-3.91,1.15A4.93,4.93,0,0,1,595,888.1V850.62c-.23-4.6-1.15-6.44-5.52-6.67S581,843.72,576.87,843.72Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M642.41,889.94c0,5.06-8.74,4.6-8.74-.46V838.89c0-3.91,8.74-3.91,8.74-.46Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-6'%20d='M372,563c0-.46-.23-.69-.23-1.15-4.83-11.27-9.66-22.54-21.15-29s-22.77-9.43-35.41-7.36c-.23,0-.46,0-.46.23-3,.92-6,2.76-9.2,3.68a3.53,3.53,0,0,1-4.37-2.76v-.92h0V477.19a11.39,11.39,0,0,1,1.61-6.21,29.31,29.31,0,0,1,15.86-15.18c2.3-.92,12.88-.92,14.72,0a33.66,33.66,0,0,1,16.1,16.79,2.92,2.92,0,0,1,.23,1.38v18.86a2.92,2.92,0,0,0,.23,1.38,18.18,18.18,0,0,0,9.42,10.34,10.3,10.3,0,0,0,5.29,0c4.14-1.61,7.59-4.14,8.74-8.74.23-.69,0-17-.69-24.6a10.47,10.47,0,0,0-1.15-4.6c-3.91-12-9.66-20.69-20.92-27.59-11.5-6.44-22.77-9-35.18-6.9-.23,0-.46.23-.69.23-17.25,6.21-30.59,16.33-35.65,35.18l-.46,1.61a19.92,19.92,0,0,0-1.38,7.36V624.35c6.9,57,90.83,55.19,96.12-1.15v-.46C372.45,601.59,374.06,583.19,372,563Zm-25.06,60.7c-3.91,25.53-42.77,22.77-45.07-1.38V568.94c5.29-25.3,45.76-24.38,46.22,1.61C348.31,588.71,349.92,606.42,346.93,623.66Z'%20transform='translate(-89.63%20-101)'/%3e%3ccircle%20class='cls-7'%20cx='317.54'%20cy='101.87'%20r='26.67'/%3e%3ccircle%20class='cls-8'%20cx='317.54'%20cy='101.64'%20r='15.41'/%3e%3cpolygon%20class='cls-9'%20points='316.62%2068.06%20293.4%2078.87%20284.2%2099.34%20316.16%2099.34%20316.62%2068.06'/%3e%3cpath%20class='cls-10'%20d='M407.4,169.06a33.81,33.81,0,1,0,33.81,33.81A33.86,33.86,0,0,0,407.4,169.06Zm-.23,60.48a26.79,26.79,0,1,1,26.68-26.9A26.69,26.69,0,0,1,407.17,229.54Z'%20transform='translate(-89.63%20-101)'/%3e%3cpath%20class='cls-2'%20d='M485.81,478.11c-3-.46-4.36-.46-6.66-.69-8.51-.69-16.1-4.37-23.92-7.59a324.58,324.58,0,0,1-65.3-37.94c-19.09-14.49-35.18-31.5-45.07-53.58a23.43,23.43,0,0,1-2.76-9.42c-1.61-47.6-2.3-97.5,0-145.33V136.64c3.68-9.43,12.42-13.11,20.46-17a138.85,138.85,0,0,1,40.7-11c21.85-4.83,44.38-5.06,67.38-7.36a1.38,1.38,0,0,1,.92-.23H509.5a1.38,1.38,0,0,1,.92.23c31.27,2.3,60.93,4.37,91.52,12.88A83.78,83.78,0,0,1,635.51,130,17,17,0,0,1,641,141V361.07c-1.61,2.76-1.15,5.75-1.15,8.51-6.67,22.07-20.7,38.86-37.94,53.57a261.44,261.44,0,0,1-41.16,29.21C544,462,527,471.44,508.12,476.73c-1.61.46-3.45.46-5.06.92s-2.53.23-5.52.46m-31-278a27.61,27.61,0,0,0-1.15,8.73c-2.07,3.91-2.3,8-3.45,12-6.67,25.06-22.76,37.48-47.14,40.7-12.19,1.61-24.6.46-37,.92s-18.4,7.36-18.4,18.4v77a17.22,17.22,0,0,0,.46,4.83c2.76,12.87,10.12,23.45,18.86,32.88a181,181,0,0,0,41.85,34c16.79,10.12,33.8,20,52.43,26.44,11,3.91,22.07,5.06,33.57.69,23-8.27,44.15-20.23,64.15-34,17-11.72,32.2-25.52,43.92-43,4.14-6.21,8-12.87,8-20.69.23-52.89.23-106,0-158.89A15.52,15.52,0,0,0,613,184.7c-14-6.21-29-9.43-43.92-11.73a237.11,237.11,0,0,0-31-3.45c-15.4-.46-30.58-2.76-46.22-.92C476.39,170.44,465.81,188.15,466.5,200.11Zm-35.64,36.33a10,10,0,0,1,2.76,1.15c3,2.53,5.29,1.38,7.81-1.15s2.76-4.37,1.15-7.36c-2.75-5.06-.92-8.51,5.52-9,4.14-.46,4.83-2.76,5.75-5.75s-.23-4.6-2.76-6.21c-5.06-3.45-4.83-7.81.46-10.8,3-1.84,3-3.91,2.3-6.9-.69-2.76-1.84-4.83-5.29-5.06-6.21-.23-8.5-4.14-5.52-9.43,1.61-3,.46-5.06-1.61-7.13s-3.9-3.45-6.89-1.61c-5.75,3.22-9.66.92-9.89-5.74-.23-3.45-1.84-4.14-4.6-4.83-2.76-.46-5.06-1.15-7.13,1.61-3.91,5.74-7.36,6-11,.46-2.06-3.22-4.36-2.76-7.35-2.3s-4.6,2.07-4.6,5.52c-.23,6-4.37,8.27-9.43,5.51a5.05,5.05,0,0,0-6.9.92.23.23,0,0,1-.23.23c-2.3,2.3-3.45,4.14-1.61,7.36,2.76,5.52,1.15,8.74-5.29,9.43-3.91.46-5.06,2.76-6,5.75s.46,4.83,3.22,6.21a5.74,5.74,0,0,1,2.3,7.81,7.45,7.45,0,0,1-1.84,2.07c-2.76,1.61-4.83,3-3.91,7.13s2.76,5.06,6.44,5.75c6,.92,7.36,3.91,4.6,9-1.61,3.22-.46,5.06,1.61,7.59,2.3,2.53,3.91,2.76,7.13,1.38,5.75-2.76,8.74-1.15,9.2,5.29.46,3.9,2.76,4.82,6,5.74s4.82,0,6.43-2.76a6.1,6.1,0,0,1,7.82-3,6.31,6.31,0,0,1,3,3c1.61,3.22,3.91,3.68,7.13,2.53,2.76-.92,5.29-1.38,4.83-5.51S427.18,237.59,430.86,236.44Z'%20transform='translate(-89.63%20-101)'/%3e%3c/svg%3e";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let MyElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.docsHint = "Exemple de texte";
  }
  render() {
    return html`
      <div>
        <a href="https://www.stanrobotix6622.com/" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button part="button">
          Click
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }
};
MyElement.styles = unsafeCSS(styles);
__decorateClass([
  property()
], MyElement.prototype, "docsHint", 2);
MyElement = __decorateClass([
  customElement("my-element")
], MyElement);
export {
  MyElement
};