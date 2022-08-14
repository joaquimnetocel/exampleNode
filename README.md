# NODE.JS EXAMPLES 📦

## DESCRIPTION

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

THIS PROJECT CONTAINS EXAMPLES AND CONFIGURATIONS FOR **[NODE.JS](https://nodejs.org)**.

![NODE IMAGE](./imageNode.jpg)

## TOPICS

THIS PROJECT IS ORGANIZED BY TOPICS. CLICK [HERE](/folderSource/folderTopics/README.md) TO ACCESS ALL THE TOPICS.

## DOWNLOAD

YOU CAN GET THIS PROJECT IN THE FOLLOWING WAYS:

* CLONNING THIS REPOSITORY USING _GIT_:

  ```bash
  git clone https://github.com/joaquimnetocel/exampleNode.git
  ```

* DOWNLOADING THE REPOSITORY [HERE](https://github.com/joaquimnetocel/exampleNode/archive/refs/heads/master.zip).

## QUICK START

* INSTALLING THE DEPENDENCIES:

  ```bash
  npm install
  ```

* RUNNING THE PROJECT

  ```bash
  # RUN ON DEVELOPMENT MODE WITH TYPESCRIPT:
  npm run tsc-dev
  ```

  ```bash
  # RUN ON DEVELOPMENT MODE WITH ESBUILD:
  npm run esbuild-dev
  ```

  ```bash
  # RUN ON PRODUCTION MODE
  npx tsc
  node ./folderDist/index.js
  ```

  ```bash
  # BUNDLE WITH ESBUILD AND RUN ON PRODUCTION MODE 
  node esbuild.production.config.js # THIS IS GOING TO CREATE/BUNDLE ./folderBundle/index.js
  node ./folderBundle/index.js
  ```

## CONTRIBUTING

YOU ARE WELCOME TO CONTRIBUTE WITH:

* :twisted_rightwards_arrows: PULL REQUESTS AND
* :star: GITHUB STARS

:smiley:
