import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'garson',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;