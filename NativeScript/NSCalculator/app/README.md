# NativeScript Angular Template

This template creates a "Hello, world" NativeScript app using TypeScript and Angular.

You can create a new app that uses this template with either the `--template` option.

```
tns create my-app-name --template tns-template-hello-world-ng
```

Or the `--ng` shorthand.

```
tns create my-app-name --ng
```

> Note: Both commands will create a new NativeScript app that uses the latest version of this template published to [npm] (https://www.npmjs.com/package/tns-template-hello-world-ng).

If you want to create a new app that uses the source of the template from the `master` branch, you can execute the following:

```
tns create my-app-name --template https://github.com/NativeScript/template-hello-world-ng.git#master

http://qianduan.guru/2016/07/03/create_cross_platform_app_with_nativescript_angular/

compile ref: https://stackoverflow.com/questions/11345193/gradle-does-not-find-tools-jar/35623142
NOTE: if compile failed!
1) delete all node_modules and reinstall: $npm install
2) $tns plaftform add android
3) $tns build android

The JAVA_HOME = C:\Program Files\Java\jdk1.8.0_112

PATH: %JAVA_HOME%/bin; %JAVA_HOME%/lib; 
```

**NB:** Please, have in mind that the master branch may refer to dependencies that are not on NPM yet!
