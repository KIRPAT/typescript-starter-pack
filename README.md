#TypeScript Starter Pack

* Install the following globally. (Note: Eslint required typescript as a dev-dep too.)
  ```
  npm i -g type-script
  npm i -g ts-node
  ```

* Install node modules.
  ```
  npm i
  ```

* Install Pettier and Eslint extensions to your code editor. 

  * VSCode: In seetings.json file, add the following. To find that file, [look here](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations).
    ```
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      { "language": "javascript", "autoFix": true,},
      { "language": "typescript", "autoFix": true,},
    ]
    ```

