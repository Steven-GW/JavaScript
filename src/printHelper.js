function printHelper(source) {
  printJS({
    printable: source,
    type: "image",
    header: "One of many frontend technlogies",
    imageStyle: "width: 50%; margin-top:20px;",
  });
}

function printAllImages() {
  printJS({
    printable: [
      "images/HTML5.png",
      "images/javascript-logo.png",
      "images/npm-logo.png",
      "images/React.png",
      "images/typescript_logo.png",
    ],
    header: "This is a tech stack of frontend technologies",
    type: "image",
    imageStyle: "width: 50%;margin-bottom:20px;",
  });
}
