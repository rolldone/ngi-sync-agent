import InitConfigService, { InitConfigInterface } from "@root/app/init/services/InitConfigService";
import Config, { ConfigInterface } from "../compute/Config";
import { CliInterface } from "./CliService";
import { readFileSync } from "fs";
import inquirer = require("inquirer");
import Command, { CommandInterface, COMMAND_TARGET } from "../compute/Command";
const chalk = require('chalk');
import _ from 'lodash';

export interface CommandServiceInterface extends BaseServiceInterface {
  returnConfig: { (cli: CliInterface): ConfigInterface }
  returnCommand: { (cli: CliInterface, jsonConfig: object): CommandInterface }
  construct: { (cli: CliInterface): void }
  secondTime : {(): void}
  _currentConf ?: ConfigInterface
  _promptAction : {(questions :inquirer.QuestionCollection):void}
  _cli ?: CliInterface
  _lastAnswer ?: object
}

const CommandService = InitConfigService.extend<Omit<CommandServiceInterface, 'returnConfigModel'>>({
  _lastAnswer : {},
  returnConfig: function (cli) {
    return Config.create(cli);
  },
  returnCommand: function (cli, jsonConfig) {
    return Command.create(cli, jsonConfig);
  },
  construct: function (cli) {},
  secondTime : function(){},
  _promptAction : function(questions){}
});

export default CommandService;