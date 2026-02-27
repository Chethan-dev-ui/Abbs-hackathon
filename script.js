// fetch("songs/song1.mp3")
//   .then(res => res.blob())
//   .then(data => {
//     console.log("Song loaded", data);
//   });
// const audio = new Audio("songs/song1.mp3");
// audio.play();


// async function main(){
//   let a = await fetch("https://127.0.0.1:3000/songs/")
//   let response = await a.text();
//   console.log(response)
// }

// main()


async function main() {
  let a = await fetch("/api/songs/song1.mp3");
  let songs = await a.json();

  console.log("Songs:", songs);
}

main();