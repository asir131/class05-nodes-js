const EventEmitter = require("events");

const emiter = new EventEmitter();

emiter.on("TEST_EVENT", (eventObj)=>{
    console.log(eventObj);
});

emiter.emit("TEST_EVENT",{
    a:20,
    b:"asir",
});