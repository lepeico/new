#!/usr/bin/env node

import {program} from "commander";
import gradient from "gradient-string";

import {defaultCommand} from "../commands/index.js";

program
    .name(gradient.fruit('new'))
    .description('CLI generator for just anything. By Lepeico')
    .version( require('../package.json').version, '-v, --version', 'output the current version')
    .addCommand(defaultCommand, { isDefault: true })

program.parse(process.argv);
