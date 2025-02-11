module.exports = {
  test_page: 'tests/index.html?hidepassed',
  browser_start_timeout: 180,
  disable_watching: true,
  launch_in_ci: [
    'Chrome',
    'Firefox'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI ? '--no-sandbox' : null,
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ].filter(Boolean)
    },
    Firefox: {
      ci: ['--window-size=1440,900']
    }
  }
};
