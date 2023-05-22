import React from 'react'

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect fill="#68e1fd" height="166.68" rx="6.47" width="137.03" x="131.49" y="75.94" /><path d="m262 243.62h-124a7.48 7.48 0 0 1 -7.47-7.47v-153.74a7.48 7.48 0 0 1 7.47-7.47h124a7.48 7.48 0 0 1 7.47 7.47v153.74a7.48 7.48 0 0 1 -7.47 7.47zm-124-166.68a5.47 5.47 0 0 0 -5.47 5.47v153.74a5.47 5.47 0 0 0 5.47 5.47h124a5.47 5.47 0 0 0 5.47-5.47v-153.74a5.47 5.47 0 0 0 -5.47-5.47z" fill="#093f68" /><path d="m143.12 84.32h113.75v147.91h-113.75z" fill="#fff" /><path d="m256.88 233.24h-113.76a1 1 0 0 1 -1-1v-147.92a1 1 0 0 1 1-1h113.76a1 1 0 0 1 1 1v147.92a1 1 0 0 1 -1 1zm-112.76-2h111.76v-145.92h-111.76z" fill="#093f68" /><g fill="#dfeaef"><path d="m177.47 133.37h-18a1 1 0 0 1 -1-1v-15.77a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15.77a1 1 0 0 1 -1 1zm-17-2h16v-13.77h-16z" /><rect height="6.38" rx="3.19" width="36.04" x="204.5" y="121.49" /><path d="m177.47 173.54h-18a1 1 0 0 1 -1-1v-15.77a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15.77a1 1 0 0 1 -1 1zm-17-2h16v-13.77h-16z" /><rect height="6.38" rx="3.19" width="36.04" x="204.5" y="161.65" /><path d="m177.47 213.71h-18a1 1 0 0 1 -1-1v-15.77a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15.77a1 1 0 0 1 -1 1zm-17-2h16v-13.77h-16z" /><rect height="6.38" rx="3.19" width="36.04" x="204.5" y="201.82" /></g><path d="m156.19 159.31 14.28 14.12 21.49-20.47-5.18-5.18-16.31 15.53-9.1-8.94z" fill="#ffbc0e" /><path d="m170.47 174.43a1 1 0 0 1 -.7-.29l-14.29-14.14a1 1 0 0 1 -.29-.72 1 1 0 0 1 .31-.71l5.18-4.94a1 1 0 0 1 1.39 0l8.41 8.26 15.61-14.86a1 1 0 0 1 1.4 0l5.17 5.17a1 1 0 0 1 .3.72 1 1 0 0 1 -.31.71l-21.49 20.47a1 1 0 0 1 -.69.33zm-12.85-15.11 12.86 12.68 20.05-19.1-3.77-3.76-15.6 14.86a1 1 0 0 1 -1.39 0l-8.41-8.27z" fill="#093f68" /><path d="m156.19 118.98 14.28 14.12 21.49-20.47-5.18-5.18-16.31 15.53-9.1-8.94z" fill="#ffbc0e" /><path d="m170.47 134.1a1 1 0 0 1 -.7-.29l-14.29-14.12a1 1 0 0 1 -.29-.72 1 1 0 0 1 .31-.72l5.18-4.93a1 1 0 0 1 1.39 0l8.41 8.26 15.61-14.86a1 1 0 0 1 1.4 0l5.17 5.17a1 1 0 0 1 .3.72 1 1 0 0 1 -.31.71l-21.49 20.47a1 1 0 0 1 -.69.31zm-12.85-15.1 12.86 12.72 20.05-19.1-3.77-3.76-15.6 14.86a1 1 0 0 1 -1.39 0l-8.41-8.27z" fill="#093f68" /><path d="m231.59 179.23a215.61 215.61 0 0 1 -27.23 18 113 113 0 0 1 -20.08 8.93l-1.45-1.9a112.94 112.94 0 0 1 13.81-17.08 213.54 213.54 0 0 1 24.45-21.65c14.07-10.78 34.91-27.53 46.91-36.21a4.22 4.22 0 0 1 5.82.84l5.57 7.26a4.22 4.22 0 0 1 -.69 5.84c-11.48 9.34-33.04 25.17-47.11 35.97z" fill="#ffbc0e" /><path d="m184.28 207.19a1 1 0 0 1 -.79-.39l-1.49-1.9a1 1 0 0 1 -.05-1.14 113.54 113.54 0 0 1 13.94-17.25 217.57 217.57 0 0 1 24.56-21.75c5.05-3.88 10.89-8.45 17.06-13.29 10.91-8.54 22.18-17.38 29.88-23a5.19 5.19 0 0 1 7.2 1l5.58 7.26a5.19 5.19 0 0 1 -.86 7.22c-7.39 6-18.86 14.64-29.95 23-6.25 4.7-12.16 9.15-17.19 13a218.23 218.23 0 0 1 -27.36 18.12 114.31 114.31 0 0 1 -20.26 9 1 1 0 0 1 -.27.12zm-.23-2.95.6.78a115.63 115.63 0 0 0 19.23-8.64 215.81 215.81 0 0 0 27.12-17.94c5-3.88 11-8.32 17.21-13 11.07-8.33 22.53-16.94 29.89-22.93a3.2 3.2 0 0 0 .53-4.45l-5.63-7.29a3.2 3.2 0 0 0 -4.44-.64c-7.67 5.56-18.93 14.38-29.82 22.92-6.19 4.84-12 9.41-17.08 13.3a214.43 214.43 0 0 0 -24.34 21.55 115.34 115.34 0 0 0 -13.27 16.34z" fill="#093f68" /><path d="m268 129.32s-4.47-2.75-9.28-1.13-34.1 26.18-34.1 26.18 3.44 2 6.29.2 1.87-4.14 1.87-4.14 20.15-15.86 22.38-16.67 4.4 1.89 4.4 1.89z" fill="#093f68" /><path d="m228.22 156.31a9 9 0 0 1 -4.09-1.07 1 1 0 0 1 -.5-.78 1 1 0 0 1 .35-.85c3-2.53 29.57-24.73 34.43-26.37 5.19-1.74 9.92 1.11 10.12 1.23a1 1 0 0 1 .08 1.65l-8.44 6.33a1 1 0 0 1 -1.38-.17s-1.77-2.12-3.28-1.58-13.82 10-21.6 16.13a4.63 4.63 0 0 1 -2.47 4.59 6 6 0 0 1 -3.22.89zm-1.66-2.25a4.81 4.81 0 0 0 3.83-.34c2-1.23 1.53-2.77 1.47-2.94a1 1 0 0 1 .32-1.13c3.38-2.67 20.38-16 22.65-16.83 2-.74 3.9.6 4.85 1.5l6.4-4.81a10.5 10.5 0 0 0 -7-.37c-3.65 1.22-23.61 17.48-32.52 24.92z" fill="#093f68" /><path d="m204.36 197.26a113 113 0 0 1 -20.08 8.93l-1.45-1.9a112.94 112.94 0 0 1 13.81-17.08z" fill="#fff" /><path d="m184.28 207.19a1 1 0 0 1 -.79-.39l-1.49-1.9a1 1 0 0 1 -.05-1.14 113.54 113.54 0 0 1 13.94-17.25 1 1 0 0 1 .77-.3 1 1 0 0 1 .74.39l7.72 10.05a1 1 0 0 1 .19.82 1 1 0 0 1 -.5.67 114.31 114.31 0 0 1 -20.26 9 1 1 0 0 1 -.27.05zm-.23-2.95.6.78a113.69 113.69 0 0 0 18.2-8.08l-6.29-8.2a114 114 0 0 0 -12.51 15.5z" fill="#093f68" /><path d="m180.84 204.37h1.88a0 0 0 0 1 0 0v3.63a.79.79 0 0 1 -.79.79h-.29a.79.79 0 0 1 -.79-.79v-3.68a0 0 0 0 1 -.01.05z" fill="#093f68" transform="matrix(.60903832 .79314079 -.79314079 .60903832 234.95 -63.4)" /><path d="m180.73 209.39h-.24a1.85 1.85 0 0 1 -1.19-.69l-.17-.23a1.76 1.76 0 0 1 -.36-1.33 1.81 1.81 0 0 1 .69-1.19l2.91-2.24a1 1 0 0 1 1.41.19l1.14 1.49a1 1 0 0 1 -.18 1.4l-2.92 2.21a1.82 1.82 0 0 1 -1.09.39z" fill="#093f68" /><path d="m235.1 67.59h-22.43a12.25 12.25 0 0 0 -24.49 0h-23.28a3 3 0 0 0 -3 3v16.9a10.14 10.14 0 0 0 10.1 10.13h56a10.14 10.14 0 0 0 10.13-10.13v-16.89a3 3 0 0 0 -3.03-3.01zm-34.67-4.9a4.94 4.94 0 0 1 4.94 4.9 4.95 4.95 0 0 1 -9.89 0 4.94 4.94 0 0 1 4.95-4.9z" fill="#68e1fd" /><path d="m228 98.62h-56a11.14 11.14 0 0 1 -11.1-11.13v-16.89a4 4 0 0 1 4-4h22.31a13.25 13.25 0 0 1 26.41 0h21.47a4 4 0 0 1 4 4v16.89a11.15 11.15 0 0 1 -11.09 11.13zm-63.07-30a2 2 0 0 0 -2 2v16.87a9.14 9.14 0 0 0 9.07 9.13h56a9.15 9.15 0 0 0 9.14-9.13v-16.89a2 2 0 0 0 -2-2h-22.47a1 1 0 0 1 -1-1 11.25 11.25 0 0 0 -22.5 0 1 1 0 0 1 -1 1zm35.52 5a5.94 5.94 0 1 1 6-6 5.94 5.94 0 0 1 -6.03 5.95zm0-9.88a3.94 3.94 0 1 0 4 3.94 3.94 3.94 0 0 0 -4.03-3.99z" fill="#093f68" />
                        </svg>
                        <span class="ml-3 text-xl">TO_DO</span>
                    </a>
                    <p class="mt-2 text-sm text-gray-500">Created by Bhavya Thumar</p>
                </div>
                {/* <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer