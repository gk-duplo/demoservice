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
    stage('Build Containers and Publish') {        
       steps {
          container('docker') {
             sh '''
                ls -ltr
                docker-compose build
                aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 399155979869.dkr.ecr.us-east-1.amazonaws.com
                  docker-compose push
                docker-compose push
             '''
          }
         
       }
    }   
  }
}