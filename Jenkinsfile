pipeline {
  agent {
    // node {
    //   label 'jenkinsAgent-jdk17-docker'
    // }

    docker { 
      label 'jenkinsAgent-jdk17-docker'
      // label 'felipecrs_jenkins_agent_dind_20231111'
      image 'node:20.9.0-slim' 
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }

    // ;; // Dind is just a huge problem -- Ec2 with Docker > Jenkins_Controller in Container (lv1) > Jenkins_Agent in Container (lv1, sibling) > Nodejs in Container (lv2) > git & build javascript inside the Container (lv2) & build Docker image inisde (lv2.5, triple nested Dind)
    // ;; // the concept (viusal graph) of where the Jenkins Agent & Docker container is not clear -- agent with docker installed ; or spawn a new agent inside the docker ; is this dind or dood 
    // ;; // there is no_knowlres for using this Docker pipeline plugin -- dk the syntax & dk how separate Stage inside that 
    // ;; 
    // ;; // ... @messy[docker_plugin vs docker_pipeline & dind pb] @pb[npm install hang & permission prolem] 
    // ;; 
    // ;; // type=bind,source=/var/run/docker.sock,destination=/var/run/docker.sock
    // ;; // type=bind,source=/usr/bin/docker,destination=/usr/bin/docker
    // ;; 
    // ;; // run as privileged process + root user in agent template
    // ;; // ;seems causing problem[cuz dk auto has -u 0:0]; args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
    // ;; // use `/home/jenkins/agent` in agent template // @pb[docker hangs the whole pc]
    // ;; 
    // ;; // dk miss more 
  }


  stages {

    stage('checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Norlandz/simpleTest-jsHttpServer-HelloWorld'
        sh 'pwd'
        sh 'ls'
      }
    }
    stage('setup env') {
      steps {
        // sh '''
        // curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
        // . ~/.nvm/nvm.sh
        // nvm install 18.12.0
        // npm install
        // '''
        sh 'npm install -g pnpm@8.10.2'
      }
    }
    stage('build') {
      steps {
        // nodejs('nodejs-v20.9.0') {
        //   sh 'npm install'
        // }
        sh 'pnpm install'
      }
    }
    stage('test') {
      steps {
        // nodejs('nodejs-v20.9.0') {
        sh 'echo "Pretend Testing"'
      }
    }
    stage('build docker image') {
      steps {
        sh 'docker build -t mindde/simpletest-jshttpserver-helloworld:0.0.1 .'
      }
    }
    stage('publish docker image') {
      environment {
        CredDockerhub = credentials('idVal_CredDockerhub')
      }
      steps {
        sh 'docker login -u $CredDockerhub_USR -p $CredDockerhub_PSW'
        sh 'docker push mindde/simpletest-jshttpserver-helloworld:0.0.1'
        sh 'docker logout'
      }
    }
    stage('pull & run docker image in remote server') {
      steps {
        sh 'echo "Pretend xxx"'
      }
    }

  }
}