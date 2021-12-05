// import 'source-map-support/register'
// require('module-alias/register')
import './global';
import * as minimist from "minimist";
import BaseStart, { BaseStartInterface } from './base/BaseStart';
import bootstrap from './bootstrap';
import { MasterDataInterface } from './bootstrap/StartMasterData';
import { Cli } from './routes/v1';
const os = require('os');
declare var masterData: MasterDataInterface;

interface AppInterface extends BaseStartInterface {
  /* Todo some extra types */
}

/* Its working when enter to child_process with stedio inherit */
process.on('SIGINT', (props: any, props2: any) => {
  if (process.env.IS_PROCESS == "open_console") {
    process.exit();
    return;
  }
});

BaseStart({
  port: null,
  init: [
    /* Your code Bootstrap here */
    bootstrap,
    /* Your can define your own stack bootstrap here */
    function (callback: Function) {
      /* You can Define route here */
      Cli.create();
      callback(null);
    }],
  run: function () {
    /* Force if on linux mac or else */
    if (os.platform() != "win32") {
      process.env.IS_PROCESS = "open_console";
    }
    /* Server is ready! */
    /* You can create some programatic code here */
    let segment1: minimist.ParsedArgs = minimist(process.argv.slice(2), {});
    switch (segment1._[0]) {
      case 'devsync_remote':
        /* Force user can delete */
        // process.env.IS_PROCESS = "open_console";
        masterData.saveData('command.devsync_remote.index', segment1._[1]);
        return;

    }
  }
} as AppInterface);