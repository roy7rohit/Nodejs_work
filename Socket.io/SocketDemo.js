const socket = new WebSocket("ws://localhost:3000")

socket.onopen = ()=>{
  socket.send("hello")
}

socket.onmessage = (data) => {
  console.log(data);
}