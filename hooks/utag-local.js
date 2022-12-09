// import { useEffect } from 'react';

// export default function useExternalScripts({ url }){
//   useEffect(() => {
//     const head = document.querySelector("head");
//     const script = document.createElement("script");

//     script.setAttribute("src", url);
//     head.appendChild(script);

//     return () => {
//       head.removeChild(script);
//     };
//   }, [url]);
// };

import { useEffect } from 'react';

export default function useExternalScripts(){
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    //script.setAttribute("src", url);
    script.innerHTML = "window.utag_cfg_ovrd = window.utag_cfg_ovrd || {}; window.utag_cfg_ovrd.noview = true; (function (a, b, c, d) { a = 'https://tags.tiqcdn.com/utag/kyndryl/dev/dev/utag.js'; b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true; a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);})();"
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  });
};