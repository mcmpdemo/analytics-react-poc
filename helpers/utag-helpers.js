// If the utag call could possibly happen before utag has loaded (e.g. page load)
// This will make the call as soon as utag has loaded (it still drops it if utag doesn't load in a certain amount of time)

export const withUtag = async () => {
  if (typeof window !== "undefined") {
    if (window.utag) return window.utag;

    let i = 0;
    while (i < 50) {
      await new Promise(resolve => setTimeout(resolve, 200));
      if (window.utag) return window.utag;
      i = i + 1;
    }
    return { link: () => { }, view: () => { } };
  }
}

//export const utag = window.utag || { link: () => {}, view: () => {} };

  // Usage: Use the resolved utag object from the Promise
  //withUtag().then(utag => utag.view({ ... }))


//Source: https://stackoverflow.com/questions/56691221/tealium-tags-integration-with-react-js

// import * as React from "react";

// export const withUtag = () => {

//   React.useEffect(() => {
//     // window is accessible here.
//     console.log("window.innerHeight", window.innerHeight);
//   }, []);

//   return (<div></div>)
// }