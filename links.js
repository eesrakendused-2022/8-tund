const urls = {
    "../home/": "Avaleht",
    "../contact/": "Kontaktileht",
    "../team/": "Tiimileht",
};

const pages = [
    "home",
    "contact",
    "team",
];

const titleDiv = document.querySelector("#title");

function getPage() {
    const urlData = url.split("/");
    return urlData[urlData.length-2];
}

const url = window.location.href;
const currentPage = getPage();
const links = document.createElement("div");
links.id = "links";

for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (page==currentPage) {
        continue;
    }
    const link = document.createElement("a");
    link.href = Object.keys(urls)[i];
    link.textContent = Object.values(urls)[i];
    links.appendChild(link);
    links.appendChild(document.createElement("br"));
}

titleDiv.appendChild(links);