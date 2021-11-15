/**
 * Meta JS File that will be picked up by the Vue CLI
 */
const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

module.exports = {
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue Atomic project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: 'Author',
    },
    build: {
      when: 'isNotTest',
      type: 'list',
      message: 'Vue build',
      choices: [
        {
          name: 'Dev server + Compiler: recommended for most users',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name: 'Compiler-only: Dev server will be not available.',
          value: 'compiler',
          short: 'compiler',
        },
      ],
    },
    i18n: {
      when: 'isNotTest',
      type: 'list',
      message: 'Translations (i18n)',
      choices: [
        {
          name: 'Use i18n as internationalization plugin for Vue.',
          value: true,
          short: 'yes',
        },
        {
          name: 'Do not configure internationalization plugin for Vue.',
          value: false,
          short: 'no',
        },
      ],
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },

  /**
   * You can add a custom complete message
   */
  // completeMessage: 'Project Complete!',
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
};
