var exec = require('cordova/exec');

exports.getBoardVersion = function(success, error) {
    exec(success, error, "Firmata", "getBoardVersion", []);
};

exports.connect = function(success, error) {
    exec(success, error, "Firmata", "connect", []);
};

// exports.isOpen = function(arg0, success, error) {
//     exec(success, error, "Firmata", "isOpen", [arg0]);
// };

// exports.close = function(arg0, success, error) {
//     exec(success, error, "Firmata", "close", [arg0]);
// };

// exports.write = function(arg0, success, error) {
//     exec(success, error, "Firmata", "write", [arg0]);
// };

// exports.reset = function(arg0, success, error) {
//     exec(success, error, "Firmata", "reset", [arg0]);
// };

// exports.sysex = function(arg0, success, error) {
//     exec(success, error, "Firmata", "sysex", [arg0]);
// };

// exports.digitalRead = function(arg0, success, error) {
//     exec(success, error, "Firmata", "digitalRead", [arg0]);
// };

// exports.analogRead = function(arg0, success, error) {
//     exec(success, error, "Firmata", "analogRead", [arg0]);
// };

// exports.pinMode = function(arg0, success, error) {
//     exec(success, error, "Firmata", "pinMode", [arg0]);
// };

// exports.digitalWrite = function(arg0, success, error) {
//     exec(success, error, "Firmata", "digitalWrite", [arg0]);
// };

// exports.analogWrite = function(arg0, success, error) {
//     exec(success, error, "Firmata", "analogWrite", [arg0]);
// };

// exports.servoWrite = function(arg0, success, error) {
//     exec(success, error, "Firmata", "servoWrite", [arg0]);
// };
