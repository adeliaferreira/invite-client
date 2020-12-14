# invite-cliente

This application calculate based on some geospational coordinates a client list to be invited to a event in office.

## How to use
You can run the package based on node or install in your local enviroment to be used as CLI

### CLI instalation
- enter in project root folder (where package.json is presented) and run
````
npm install -g .
````
- open a terminal tab and enter to run default version
````
invite-client
````

### Node execution

- First execution use:

`````
npm install && node src/index.js
`````

- After this, you can use:
````
node src/index.js
`````


## Optional parameters
You can also send some parameters to CLI/Node execution using command flags

Type in your console tab (CLI instalation):
````
invite-client --help
````

or in node execution:

`````
 node src/index.js --help
 `````


You will see a parameter list and desciptions:

`````
  --help               Show help                                       [boolean]
  --version            Show version number                             [boolean]
  --lat, --latitude    office latitude                                  [number]
  --long, --longitude  office longitude                                 [number]
  --fp, --path         file path with client list                       [string]
  --range, -r          use a range from office different then 100 km    [number]
  `````

#### Using a coordinate different from default (53.339428, -6.257664)
You can use this optional parameters to calculate the invite list for different office locations

e.g.

`````
node src/index.js --lat 54.180238 --long -5.920898
``````

or 

`````
invite-client --lat 54.180238 --long -5.920898
``````

for the default entry file, this coordinates should return just 4 clients to be invited. 

#### Using a different office range distance (Default: 100 KM)
You can use `--range <Value in KM>` to set a different range from office to select clients
e.g.
`````
node src/index.js --range 50 // this will get clients inside 50 km range
``````

or 

`````
invite-client --range 50 // this will get clients inside 50 km range
``````

#### Using a another file as source from client list (Default: included in data folder)
You can use `--path 'path to file'` to load client list from a different file.
e.g.
`````
node src/index.js --path 'my/file/path/file.txt'
``````

or 

`````
invite-client --path 'my/file/path/file.txt'
``````

## Developer informations

This project is developed using:
- Node V14.12.0
- Chai
- Mocha
- Yargs
- ESLint

you can use npm to run tests to this project with this command:

`````
npm test
``````

if you made any change, you can run lint using this command:

`````
npm run lint
``````

