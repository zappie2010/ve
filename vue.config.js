module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        appId: 'com.samsung.sherlock.watcher',
        nsis: {
          shortcutName: 'watcher'
        },
        win: {
          target: [
            {
              target: 'portable',
              arch: [
                'x64'
              ]
            }
          ]
        }
      }
    }
  }
}
