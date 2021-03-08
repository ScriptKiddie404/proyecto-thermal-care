// Modificar estos datos acorde al usuario:
const arduinoPort = 'COM3'; //cambiar al adecuado.
const user = 'Fernando'; //cambiar al usuario adecuado.

// Importar el esquema de la base de datos y la bd:
require('./db/mongoose');
const SensorRecord = require('./models/SensorRecord');


// Serial Port communication
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(arduinoPort, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));


// Este método se llama una vez que inicia la comunicación.
port.on("open", () => {
    console.clear();
    console.log("Comunicación serializada iniciada...");
});

// El método con evento 'data' se llama siempre que se recibe un dato del puerto serial
parser.on('data', async (data) => {

    const [temperature, humidity] = data.replace(/\r/ig, '').split(' ');
    console.clear();
    console.log(`New record on database - T: ${temperature} - H: ${humidity}`);


    const sensorData = new SensorRecord({
        user: user,
        date: new Date().toISOString(),
        temperature: temperature,
        humidity: humidity
    });

    try {
        await sensorData.save();
    } catch (error) {
        console.log(error);
    }

});
