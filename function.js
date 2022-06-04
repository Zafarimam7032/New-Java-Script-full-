function display() {
  console.info("this is display function");
}
display();
function info() {
  console.info("inside info function");
  for (let i = 0; i < 5; i++) {
    display();
  }
}
info();
