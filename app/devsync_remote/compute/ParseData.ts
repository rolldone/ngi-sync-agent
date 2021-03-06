import BaseModel, { BaseModelInterface } from "@root/base/BaseModel";
// import http, { IncomingMessage, ServerResponse } from 'http';
import axios from 'axios';

export interface ParseDataInterface extends BaseModelInterface {
  construct?: { (port: string): void }
  _port?: number | string
  getConfig?: { (): any }
  sendData?: { (action: string, path: string): any }
}

const ParseData = BaseModel.extend<Omit<ParseDataInterface, 'model'>>({
  construct(port) {
    this._port = port;
  },
  getConfig() {
    var options = {
      host: 'localhost',
      path: '/',
      //since we are listening on a custom port, we need to specify it by hand
      port: this._port,
      //This is what changes the request to a POST request
      method: 'GET'
    };

    return new Promise(async (resolve) => {
      // var callback = function (response: IncomingMessage): void {
      //   var str = ''
      //   response.on('data', function (chunk) {
      //     str += chunk;
      //   });
      //   response.on('end', function () {
      //     resolve(str);
      //   });
      // }
      // var req = http.request(options, callback);
      // req.end();
      let resData = await axios.get('http://' + options.host + ':' + options.port + options.path);
      resolve(resData.data);
    })
  },
  sendData(action, path) {
    try {
      var options = {
        host: 'localhost',
        path: `/?action=${action}&path=${path}`,
        //since we are listening on a custom port, we need to specify it by hand
        port: this._port,
        //This is what changes the request to a POST request
        method: 'GET'
      };
      // var callback = function (response: IncomingMessage): void {
      //   var str = ''
      //   response.on('data', function (chunk) {
      //     str += chunk;
      //   });
      //   response.on('end', function () {

      //   });
      // }
      axios.get('http://' + options.host + ':' + options.port + options.path);
      // var req = http.request(options, callback);
      // req.end();
    } catch (ex) {
      console.log('post - ex ', ex);
    }
  }
});

export default ParseData;