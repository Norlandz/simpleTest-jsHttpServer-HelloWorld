pipeline {
  agent {
    node {
      label 'jenkinsAgent-jdk17-docker'
    }
  }

  stages {
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

    stage('checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Norlandz/simpleTest-jsHttpServer-HelloWorld'
        sh 'ls'
      }
    }
    stage('setup env') {
      steps {
        sh '''
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
        . ~/.nvm/nvm.sh
        nvm install 18.12.0
        ls
        npm clean-install
        '''
      }
    }
    stage('build') {
      steps {
        // nodejs('nodejs-v20.9.0') {
        //   // sh 'pnpm install'
        //   sh 'npm install'
        // }
        // sh 'npm install'
        sh 'echo zzz'
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
        sh 'docker build -t mindde/simpleTest-jsHttpServer-HelloWorld:0.0.1 .'
      }
    }
    stage('publish docker image') {
      environment {
        CredDockerhub = credentials('idVal_CredDockerhub')
      }
      steps {
        sh 'docker login -u $CredDockerhub_USR -p $CredDockerhub_PSW'
        sh 'docker push mindde/simpleTest-jsHttpServer-HelloWorld:0.0.1'
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