#!/usr/bin/env node

var jsonEnvVariables = require('./.env.json');
var envVariables;
switch (process.env.NODE_ENV) {
  case 'dev':
    envVariables = jsonEnvVariables.dev;
    break;
  case 'prod':
    envVariables = jsonEnvVariables.prod;
    break;
  case 'staging':
    envVariables = jsonEnvVariables.staging;
    break;
  default:
    console.log('\x1b[31m', 'ERROR: NODE_ENV should be in [dev, prod, staging]');
    process.exit(1);
}

var fs = require('fs'),
  parseString = require('xml2js').parseString,
  xml2js = require('xml2js');
fs.readFile('config.xml', 'utf-8', function (err, data) {
  if (err) console.log('\x1b[31m', err);
  parseString(data, function (err, result) {
    if (err) {
      console.log('\x1b[31m', err);
      process.exit(1);
    }
    result.widget.$.id = envVariables.appID;
    result.widget.name[0] = envVariables.appName;
    result.widget.$.version = envVariables.appVersion;
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(result);
    fs.writeFile('config.xml', xml, function (err, data) {
      if (err) {
        console.log('\x1b[31m', err);
        process.exit(1);
      }
      console.log('\x1b[32m','App name set to ' + envVariables.appName);
      console.log('\x1b[32m', 'App ID set to ' + envVariables.appID);
      console.log('\x1b[32m','App version set to ' + envVariables.appVersion);
      console.log('\x1b[32m',"Successfully written config.xml");
    });
  });
});
/*fs.readFile('build.json', 'utf-8', function (err, data) {
  if (err) console.log('\x1b[31m', err);
  var parsedJson = JSON.parse(data);
  parsedJson.ios.debug.developmentTeam = envVariables.teamID;
  parsedJson.ios.release.developmentTeam = envVariables.teamID;
  fs.writeFile('build.json', JSON.stringify(parsedJson), function (err, data) {
    if (err) {
      console.log('\x1b[31m', err);
      process.exit(1);
    }
    console.log('\x1b[32m','build.json generated');
  });
});*/
fs.writeFile("fastlane/Appfile", 'json_key_file "' + envVariables.androidKeyFile +'"\n' +
  'package_name "' + envVariables.appID +'"\n' +
  'app_identifier "' + envVariables.appID +'"\n' +
  'apple_id "' + envVariables.appleID +'"\n' +
  'team_id "' + envVariables.teamID +'"'

  , function(err) {
    if(err) {
      console.log('\x1b[31m', err);
      process.exit(1);
    }
    console.log('\x1b[32m',"Successfully written fastlane AppFile");
  });
/*fs.writeFile("fastlane/Gymfile", 'workspace "platforms/ios/' + envVariables.appName +'.xcworkspace"\n' +
  'export_method "app-store"'
  , function(err) {
    if(err) {
      console.log('\x1b[31m', err);
      process.exit(1);
    }
    console.log('\x1b[32m',"Successfully written fastlane GymFile");
  });*/
fs.writeFile("fastlane/metadata/android/en-US/full_description.txt", envVariables.androidFullDescription, function(err) {
  if(err) {
    console.log('\x1b[31m', err);
    process.exit(1);
  }
  console.log('\x1b[32m',"Successfully written fastlane Android full_description.txt");
});
fs.writeFile("fastlane/metadata/android/en-US/short_description.txt", envVariables.androidShortDescription, function(err) {
  if(err) {
    console.log('\x1b[31m', err);
    process.exit(1);
  }
  console.log('\x1b[32m',"Successfully written fastlane Android short_description.txt");
});
fs.writeFile("fastlane/metadata/android/en-US/title.txt", envVariables.androidTitle, function(err) {
  if(err) {
    console.log('\x1b[31m', err);
    process.exit(1);
  }
  console.log('\x1b[32m',"Successfully written fastlane Android title.txt");
});
