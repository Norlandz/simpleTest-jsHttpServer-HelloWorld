pipeline {
  agent {
    // node {
    //   label 'jenkinsAgent-jdk17-docker'
    // }

    docker { 
      label 'jenkinsAgent-jdk17-docker'
      // label 'felipecrs_jenkins_agent_dind_20231111'
      image 'node:20.9.0-slim' 
      // args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

  // stage('Start Container & run build & test inside') {
  //   steps {
  //     script {
  //       docker.image('node:20.9.0-slim').inside {
  //         git '…your-sources…'
  //         sh 'mvn -B clean install'
  //       }
  //     }
  //   }
  // }

  // Dind is just a huge problem -- Ec2 with Docker > Jenkins_Controller in Container (lv1) > Jenkins_Agent in Container (lv1, sibling) > Nodejs in Container (lv2) > git & build javascript inside the Container (lv2) & build Docker image inisde (lv2.5, triple nested Dind)
  // the concept (viusal graph) of where the Jenkins Agent & Docker container is not clear -- agent with docker installed ; or spawn a new agent inside the docker ; is this dind or dood 
  // there is no_knowlres for using this Docker pipeline plugin -- dk the syntax & dk how separate Stage inside that 

  // ... @messy[docker_plugin vs docker_pipeline & dind pb] @pb[npm install hang & permission prolem] // []@¦  // /home/jenkins/workspace/simpleNodejsPip@tmp/durable-f94e22da/script.sh: 1: docker: not found@¦  // <>@¦  // http://34.230.0.56:8080/job/simpleNodejsPip/20/console@¦  // ~~~// said its dind ... @¦  // []@¦//         args  '-v /tmp:/tmp'@¦// <>@¦// https://www.jenkins.io/doc/book/pipeline/syntax/@¦// ~~~// dk this can be real messy ; (said more pb in one way or another ... @¦// ~~~// & @que,confirmation is not solved ... -- but the guess is just indeed dind @¦// the sep of command (in / out the docker) running said a pb too @¦// dk miss; but if thats clear  ;; guess just logic & better design should [[ brain@¦ // type=bind,source=/var/run/docker.sock,destination=/var/run/docker.sock@¦type=bind,source=/usr/bin/docker,destination=/usr/bin/docker@¦~~~// just makes it hang aga; dk other try ; just not working ; // no_knowlres no good way saying how to do ; @¦

  stages {

    // stage('checkout') {
    //   steps {
    //     git branch: 'main', url: 'https://github.com/Norlandz/simpleTest-jsHttpServer-HelloWorld'
    //     sh 'pwd'
    //     sh 'ls'
    //   }
    // }
    // stage('setup env') {
    //   steps {
    //     sh '''
    //     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    //     . ~/.nvm/nvm.sh
    //     # nvm install 20.9.0
    //     nvm install 18.12.0
    //     pwd
    //     ls
    //     # npm clean-install
    //     npm install
    //     '''
    //   }
    // }
    stage('build') {
      // ;not_working; options {
      // ;not_working;   timeout(time: 1, unit: "MINUTES")
      // ;not_working; }
      steps {
        // nodejs('nodejs-v20.9.0') {
        //   // sh 'pnpm install'
        //   sh 'npm install'
        // }
        // sh 'npm install'
        sh 'echo zzz'
        // sh 'docker -v'
      }
    }
    // stage('test') {
    //   steps {
    //     // nodejs('nodejs-v20.9.0') {
    //     sh 'echo "Pretend Testing"'
    //   }
    // }
    // stage('build docker image') {
    //   steps {
    //     sh 'docker build -t mindde/simpleTest-jsHttpServer-HelloWorld:0.0.1 .'
    //   }
    // }
    // stage('publish docker image') {
    //   environment {
    //     CredDockerhub = credentials('idVal_CredDockerhub')
    //   }
    //   steps {
    //     sh 'docker login -u $CredDockerhub_USR -p $CredDockerhub_PSW'
    //     sh 'docker push mindde/simpleTest-jsHttpServer-HelloWorld:0.0.1'
    //     sh 'docker logout'
    //   }
    // }
    // stage('pull & run docker image in remote server') {
    //   steps {
    //     sh 'echo "Pretend xxx"'
    //   }
    // }

  }
}