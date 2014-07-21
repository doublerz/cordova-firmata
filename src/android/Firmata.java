package com.github.warp.cordova.firmata;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import org.shokai.firmata.ArduinoFirmata;

public class CDVFirmata extends CordovaPlugin {

    private ArduinoFirmata arduino = new ArduinoFirmata();

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("getBoardVersion")) {
            this.getBoardVersion(callbackContext);
            return true;
        }
        else if (action.equals("connect")) {
            this.getBoardVersion(callbackContext);
            return true;
        }
        return false;
    }

    private void getBoardVersion(CallbackContext callbackContext) {
        String version = arduino.getBoardVersion();
        callbackContext.success(version);
    }

    private void connect(CallbackContext callbackContext) {
        try{
            arduino.connect();
            getBoardVersion(callbackContext);
        }
        catch(IOException e){
            callbackContext.error(e.printStackTrace());
        }
    }
}
