const socket = io();
const img = document.createElement('img');
img.src = './psygif2.gif';
img.width = '160'
document.getElementById('image-container').appendChild(img);


socket.on("chat", (data) => {
  if (data) {
    console.log("chat", data);
    const newComment = data.comment;
    console.log("newComment", newComment);
    if (        String("vit").toLocaleLowerCase() ===
    String(data.comment).toLocaleLowerCase()) {
      const img = document.createElement('img');
      img.src = './psygif2.gif';
      img.width = '160'
      document.getElementById('image-container').appendChild(img);
    }


  }
});

const submitData = () => {
  // Retrieve the input value
  var inputData = document.getElementById("myInput").value;

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputData: inputData }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const disconnectTitktok = () => {
  fetch("/stop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
