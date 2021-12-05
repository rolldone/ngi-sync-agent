import BaseModel, { BaseModelInterface } from "@root/base/BaseModel";
const { exec } = require("child_process");
import { CliInterface } from "../services/CliService";
export enum COMMAND_TARGET {
  LOCAL = 'Local machine',
  TARGET = 'Target machine',
  BOTH = 'Both'
}

export interface CommandInterface extends BaseModelInterface {
  _cli?: CliInterface
  construct: { (cli: CliInterface, jsonConfig: object): void }
  create?: (cli: CliInterface, jsonConfig: object) => this
  setOnListener: { (callback: Function): void }
  _onListener?: Function
  _setCommandTarget: { (props: string): void }
  _setSshConfig: { (props: object): void }
  _commandTarget?: string | null
  _sshConfig?: object | null
}


const Command = BaseModel.extend<Omit<CommandInterface, 'model'>>({
  construct: function (cli, jsonConfig) {
    this._cli = cli;
    this._setSshConfig(jsonConfig);
  },
  setOnListener: function (listener) {
    this._onListener = listener;
  },
  _setCommandTarget: function (props) {
    this._commandTarget = props;
  },
  _setSshConfig: function (props) {
    this._sshConfig = props;
  }
});

export default Command;