# WEBPACK Optimization for production:

1. Change the mode to production in the configuration file          (webpack.config.js) and use start script as
    "build:prod": "webpack -p --env production"
2. Add env paramater production to config file by change the config type to
    function. Thus env parameter passed to config file.
3. Change webpack dev-tool source map based on production parameter.

**GREAT SAVING !!!**
This optimizations reduced the size from 6.5 MiB to 612 KiB. Then we had,bundle.js and bundle.js.map source files.


# extract-text-webpack-plugin

It moves all the required *.css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.

> Warning - This plugin is not working with webpack 4.0 or above.
Use mini-css-extract-plugin instead of it.

# Express Framework for Production

server/server.js file includes basic express functions to run up server.

# Redux-Thunk

 middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods 
 dispatch and getState as parameters.

 # redux-mock-store
 A mock store for testing Redux async action creators and middleware. The mock store will create an array of dispatched actions which serve as an action log for tests.

 # dotenv
 Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
 Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

 .env.test and .env.development file set process.env varaibles for test and development firebase databases.

# history - redirect functinality for All JS 
history is a JavaScript library that lets you easily manage session history anywhere JavaScript runs. history abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.











 ## Markdown Systax
 > Block Note:
 > - Test1
 > - test2
 > *Italic Style*
 > Hello from the hell.
 >
```JS
    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
```
```
npm install redux
```
