pipeline {
  agent {
    kubernetes {
      //cloud 'kubernetes'
      label 'mypod'
      yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: docker
    image: duplocloud/jenkins:slave-1.3
    command: ['cat']
    tty: true
    volumeMounts:
    - name: dockersock
      mountPath: /var/run/docker.sock
    imagePullPolicy: Always
  volumes:
  - name: dockersock
    hostPath:
      path: /var/run/docker.sock
"""
    }
  }
  stages {
    stage('Clone repository') {        
       steps {
          checkout scm
       }
    }   
    stage('Build Containers') {        
       steps {
          sh '''
            sleep 60
            docker build -t 399155979869.dkr.ecr.us-east-1.amazonaws.com/jenkins-test:${BUILD_NUMBER} .
         '''
       }
    }   
  }
}
