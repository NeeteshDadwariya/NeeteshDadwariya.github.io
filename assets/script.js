window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-J4K93TBKQD');

function pushToGA(event_label) {
    gtag("event", event_label);
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
        pushToGA(entries[0].target.id)
    }
});

window.onload = () => {
    observer.observe(document.getElementById('about'));
    observer.observe(document.getElementById('experience'));
    observer.observe(document.getElementById('projects'));
    observer.observe(document.getElementById('contact'));
}
