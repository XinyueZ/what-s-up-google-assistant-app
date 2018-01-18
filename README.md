What's Up (A Google Assistant APP)
======
# Start with official "startup"
https://developers.google.com/actions/dialogflow/first-app

# Deploy cloud function on [Firebase](https://www.firebase.com)

- ```npm install -g firebase-tools```

- ```firebase login```

- git-clone this repository

- Copy ```/functions/index.js```, ```/function/package.json``` to a save place.

- Delete whole ```/functions/```, we'll create following below steps late again.

- firebase init
> You might see a selection-list about which CLI you want to deploy for your APP, you should select Functions(the second one).

- You should see directory ```/functions/``` again.

- If you don't see ```/functions/```, you should do next, however you must see the files: .firebaserc and firebase.json.
> firebase init functions

- Then you should see ```/functions/```.

- Return the files: ```/functions/index.js```, ```/function/package.json``` 

- ```npm install```

- ```firebase deploy --only functions```

# DialogFlow

Define some *Intents*, *Entities*

Don't forget to give each *Action* of *Intent* a name, otherwise the function will return parsing-error.

Events name is not important, however nice-to-have.

# What is the Intent?

> Intent has an Action(Very simular to Android).

An Action has a group of parmeters which might have ```PARAMETER NAME```  ```geo-city```, ```geo-country``` being defined by Google Inc as system action. An Action has a property ```ENTITY``` always being like ```@sys.geo-city```, ```sys.geo-country```, they are like types in common programming languages. In this repo upon ones are all used.

We can use not only Google's   ```ENTITY```, but also define our own ones.
Like [app_exit](https://developers.google.com/actions/assistant/app-exits). In this repo I use this.

# License

[MIT](https://github.com/XinyueZ/what-s-up-google-assistant-app/blob/master/LICENSE)