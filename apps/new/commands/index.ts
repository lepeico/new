import {Command} from "commander";
import inquirer from "inquirer";
import inquirerPrompt from "inquirer-autocomplete-prompt";

inquirer.registerPrompt('autocomplete', inquirerPrompt);

const action = async () => {
    await inquirer
        .prompt([
            {
                type: 'autocomplete',
                name: 'from',
                message: 'Select a state to travel from',
                source: (answersSoFar: any, input: any) => [answersSoFar, input],
            },
        ])
}

export const defaultCommand = new Command(' ')
    .action(action)
