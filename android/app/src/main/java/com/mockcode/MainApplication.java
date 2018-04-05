package com.mockcode;

import android.app.Application;

import com.facebook.react.ReactApplication;
import fr.greweb.rnwebgl.RNWebGLPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.horcrux.svg.SvgPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.badfeatures.nearby.RNNearbyApiPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;

import fr.greweb.rnwebgl.RNWebGLPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.horcrux.svg.SvgPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.badfeatures.nearby.RNNearbyApiPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;

import fr.greweb.rnwebgl.RNWebGLPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.brentvatne.react.ReactVideoPackage;
import com.badfeatures.nearby.RNNearbyApiPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage;
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage;
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNWebGLPackage(),
            new ReactVideoPackage(),
            new SvgPackage(),
            new OrientationPackage(),
            new RNNearbyApiPackage(),
            new RNDeviceInfo(),



            new RNWebGLPackage(),
            new ReactVideoPackage(),
            new SvgPackage(),
            new OrientationPackage(),
            new RNNearbyApiPackage(),
            new RNDeviceInfo(),
            new AppCenterReactNativeCrashesPackage(MainApplication.this, getResources().getString(R.string.appCenterCrashes_whenToSendCrashes)),
            new AppCenterReactNativeAnalyticsPackage(MainApplication.this, getResources().getString(R.string.appCenterAnalytics_whenToEnableAnalytics)),
            new RNWebGLPackage(),
            new RNDeviceInfo(),
            new ReactVideoPackage(),
            new RNNearbyApiPackage(),
            new OrientationPackage(),
            new AppCenterReactNativeCrashesPackage(MainApplication.this, getResources().getString(R.string.appcenterCrashes_whenToSendCrashes)),
            new AppCenterReactNativeAnalyticsPackage(MainApplication.this, getResources().getString(R.string.appcenterAnalytics_whenToEnableAnalytics)),
            new AppCenterReactNativePackage(MainApplication.this)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
