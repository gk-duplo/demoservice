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
    image: duplocloud/jenkins:slave-1.1
    command: ['cat']
    tty: true
    volumeMounts:
    - name: dockersock
      mountPath: /var/run/docker.sock
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
            #!/bin/bash
            docker-compose build
         '''
       }
    }   
  }
}
