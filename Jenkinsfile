library 'pipeline-library-duplocloud'
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
  parameters {
      string(name: 'ENV', defaultValue: 'dev02', description: 'tenant name or env name')
  }
  
  environment {
      TENANT_DATA     = credentials("${params.ENV}")
    
    }
  
  stages {
     stage('Initialize the variables') {
             def jsonString = '${TENANT_DATA}'
             def jsonObj = readJSON text: jsonString
            // Each stage is made up of steps
            steps{
                script{
                    DB_ENDPOINT=jsonObj.endpoint
                }
            }                
        }
    stage('Clone repository') {        
       steps {
          checkout scm
       }
    }   
    stage('Build Containers and Publish') {        
       steps {
          container('docker') {
             sh '''
                echo "===== Build Containers ===="
                echo "DB Endpoint: ${DB_ENDPOINT}"
                docker-compose build
             '''
          }
         
       }
    }  

    stage('Publish Docker containers') {        
       steps {
          container('docker') {
             sh '''
                echo "===== Docker login ===="
                aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 399155979869.dkr.ecr.us-east-1.amazonaws.com
                  docker-compose push
                echo "===== Push Containers ===="
                docker-compose push
             '''
          }
         
       }
    }  

    stage('Update demo service'){
         steps{
          dcDeploy( [ 
                   tenant: "dev02",  
                   service: [
                         image: "399155979869.dkr.ecr.us-east-1.amazonaws.com/jenkins-test:${env.BUILD_NUMBER}", 
                         name: "demo"]
                  ])
         }
       }
  }
}
