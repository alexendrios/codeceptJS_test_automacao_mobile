const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  output: './output',
  timeout: 10000,
  helpers: {
    Appium: {
      app: 'C:/projeto/codecepttjs-mobile/apk/agapito-app.apk',
      platform: 'Android',
      device: 'emulator',
      video: true,
      keepVideoForPassedTests: true,
      trace: true,
    },
    Hooks: {
      require: './helpers/hooks.js'
    }
  },
  include: {
    I: './steps_file.js',
    openAppPage: "./tests/pages/openAppPage.js",
    loginPage: "./tests/pages/loginPage.js"
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  gherkin: {
    features: './tests/features/*.feature',
    steps: [
      './tests/step_definitions/abrirApicacao_steps.js',
      './tests/step_definitions/login_steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-report',
      enabled: true,
      enableVideo: true
    },
    subtitles: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      screenshotsForAllureReport: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    }
  },
  stepTimeout: {
    enabled: true,
    timeout: 30
  },
  tests: './tests/*_test.js',
  name: 'codecepttjs-mobile'
}