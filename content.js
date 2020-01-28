function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
}

var element = document.createElement("button");
element.onclick = () => {
    const { q, iax } = parseQuery(window.location.search);

    window.location.href =
        "https://google.com/search?q=" + (q ? q : "") + (iax && iax === "images" ? "&tbm=isch" : "") + (iax && iax === "videos" ? "&tbm=vid" : "");
};

element.style = `
background-color: #66ad57;
border-radius: 4px;
color: white;
font-size: 16px;
border: none;
padding: 8px;
margin-left: 16px;
`;

element.appendChild(document.createTextNode("I was unlucky"));
var page = document.getElementsByClassName("js-header-aside")[0];
page.appendChild(element);
