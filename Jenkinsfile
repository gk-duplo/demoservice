pipeline {
  stages {
    stage('Clone repository') {        
       steps {
          checkout scm
       }
    }   
    stage('Build Containers') {        
       steps {
          sh '''
            ls -ltr /tmp
            sleep 60
            docker build -t 399155979869.dkr.ecr.us-east-1.amazonaws.com/jenkins-test:${BUILD_NUMBER} .
         '''
       }
    }   
  }
}
