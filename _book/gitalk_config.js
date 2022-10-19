var gitalk = new Gitalk({
    "clientID": "9f8430941837ef95d13b",
    "clientSecret": "ca1e6d3d575da60b344d04ddf8af7f6814632019",
    "repo": "LangYa-Tutorials",
    "owner": "nArrow4",
    "admin": ["nArrow4"],
    "id": window.location.pathname,
    "distractionFreeMode": false
    });
gitalk.render("gitalk-container");