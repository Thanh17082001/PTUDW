const app= require('./app');
const config= require("./app/config");

const Port=config.app.port;
app.listen(Port, () => {
    console.log(`listen with port ${Port}`)
})


