

const InfinityScroll = (feth) => {
    const onEntries = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("object is intersecting");

                feth()

                //   observer.disconnect(); if need stop fn  observer
                //   observer.unobserve(entry); if need stopped observe for some element
            }
        });
    };
    const options = {
        rootMargin: "50px", //margin begin observe
        threshold: 0.5, //areas elem views in browser viewport (default=1)
    };
    const observerApi = new IntersectionObserver(onEntries, options);
    const trackingObj = document.querySelector('#trackingObj');
    observerApi.observe(trackingObj);

}

export default InfinityScroll