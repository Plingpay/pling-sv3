node {

  def folder = 'plingpay-app'

  def branches = [
    'develop': [
      'commandAndroid': './build_release_develop_android'
    ],
    'master': [
      'commandAndroid': './build_release_staging_android'

    ],
    'production': [
      'commandAndroid': './build_release_production_android'
    ]
  ]

  def branch = branches[env.BRANCH_NAME]
  def commandAndroid = branch['commandAndroid']
  try {
    stage "build Android"
    deleteDir()
    checkout scm
    sh 'git checkout ' + branch
    sh 'npm install'
    sh 'sh ' + commandAndroid

    stage "deploy Android"
    sh 'fastlane deploy'

    stage "slack Android success"
    slackSend color: 'good', message: "Deploy PlingPay " + env.BRANCH_NAME + " Android App is success! See console log in " + env.BUILD_URL + " console.", channel: "#plingpay_app_jenkins"
  } catch (err) {
    stage "slack error"
    slackSend color: 'bad', message: "Deploy PlingPay " + env.BRANCH_NAME + " is FAILED! See console log in " + env.BUILD_URL + " console", channel: "#plingpay_app_jenkins"
  }


}
