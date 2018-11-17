# wakecap

Wakecap is an application to list all the workers and other details of the worker.

## Getting Started

* npm

Download npm from [NPM](https://nodejs.org/en/) and follow the instructions

Check whether its installed by
```
node -v
npm -v
```

To update your npm
```
npm install npm@latest -g
```

### Clone Project
```
git clone https://github.com/AmalaLiza/wakecap.git
```

### Install Packages
```
cd wakecap
npm i
```

### Building
#### local
```
npm start
```

### Dev notes:
- Code placement:
    - Components:
        - Those components which are independent and used by both core and apps, go in "commons->src>components" folder.
        Example: Avatar, Header, SideBar
        - Those components which are used only in core by one or more pages, go in "core->src>components" folder
