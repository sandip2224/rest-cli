## 📌 rest-cli

> HTTP client built on the command line

## ✨ Prerequisites
```
$ npm i -g yarn
```

## ⚡️ Install

1. Fork and clone the repository using:
```
$ git clone https://github.com/sandip2224/rest-cli.git
$ cd rest-cli
```

2. Install project dependancies using:
```
$ yarn
```

3. Create a global symlink using:
```
$ npm link
```

## 🚀 Usage

```
$ rest-cli --help

  Usage:
    $ commands|v [options] [command]
  
  Options:
    -V, --version   output the version number
    -h, --help      display help for command
  
  Commands:
    getAll|gA       🚩 GET all todos from database      
    get|g           🚀 GET a specific todo from database
    create|c        🚀 CREATE a new todo
    update|u        🚀 UPDATE an existing todo
    delete|d        🚀 DELETE an existing todo
    help [command]  display help for command
    
  Examples:
    $ rest-cli getAll
    $ rest-cli help [update]
    $ rest-cli delete
```

## ♻️ Demonstration

<!-- | rest-cli help  |
| - |
| ![H](https://user-images.githubusercontent.com/61842142/147322073-6eb46c1d-5c70-4b69-b115-1943aa9f02e2.gif) |
 -->
| rest-cli getAll |
| - |
![GA](https://user-images.githubusercontent.com/61842142/147322008-0954b842-bb2d-4d5f-9830-2f216c34fd6e.gif)

| rest-cli get |
| - |
![G](https://user-images.githubusercontent.com/61842142/147322085-4ca33ec5-fbf9-42fa-8884-e02a2f7f81d4.gif)

| rest-cli create |
| - |
![P](https://user-images.githubusercontent.com/61842142/147322096-644d47c0-8ceb-4dfe-b6e9-65ef554b5717.gif)

| rest-cli update |
| - |
![U](https://user-images.githubusercontent.com/61842142/147322102-2ef06e52-d382-40bc-94da-dd5104bbc11e.gif)

| rest-cli delete |
| - |
![D](https://user-images.githubusercontent.com/61842142/147322107-122f35bf-958d-473a-8626-f20d940fadfc.gif)


## 🚨 Testing the API locally
1. Follow steps 1 and 2 under **Install** section.

2. Create a _.env_ file in the root directory (`/rest-cli`) using:
```
$ touch .env
```

3. Add the following key-value pairs inside the .env file:
```
MONGO_URI=<Unique_MongoDB-Cluster-Database_URI>
MONGO_TEST_URI=<Unique_MongoDB-Cluster-Test-Database_URI>
```

4. Start the API in development mode using (port 3000):
```
$ yarn dev
```
or test the API endpoints using Mocha and Chai:
```
$ yarn test
```

## 👨 Maintainer

- [Sandipan Das](http://github.com/sandip2224)
