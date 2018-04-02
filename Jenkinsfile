node {

  def folder = 'plingpay_backend'

  def branches = [
    'develop': [
      'host': 'ec2-54-159-9-36.compute-1.amazonaws.com',
      'pem': '/var/lib/jenkins/plingpay-develop.pem',
      'commandAndroid': './build_release_develop_android',
      'commandBrowser': 'cordova prepare & ionic cordova build browser --release --aot --minifyjs --minifycss --optimizejs --no-interactive'
    ],
    'prod': [
      'host': 'ec2-18-197-147-54.eu-central-1.compute.amazonaws.com',
      'pem': '/var/lib/jenkins/plingpay-prod.pem',
      'commandAndroid': './build_release_production_android',
      'commandBrowser': 'cordova prepare & ionic cordova build browser --release --prod --minifyjs --minifycss --optimizejs --no-interactive'
    ]
  ]

  def branch = branches[env.BRANCH_NAME]
  def commandAndroid = branch['commandAndroid']
  def commandBrowser = branch['commandBrowser']
  def host = branch['host']
  def pem = branch['pem']
  try {
    stage "build Browser"
    deleteDir()
    checkout scm
    sh 'git checkout ' + env.BRANCH_NAME
    sh 'npm install'
    sh commandBrowser

    stage "deploy Browser"
    sh 'scp -r -i ' + pem + ' platforms/browser/www ubuntu@' + host + ':./' + folder + '/mobile_app'

    stage "build Android"
    deleteDir()
    checkout scm
    sh 'git checkout ' + env.BRANCH_NAME
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
