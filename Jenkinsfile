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
    image: docker:1.11
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
	  def app     
	  stage('Clone repository') {               
			 
			checkout scm    
	  }     
	  stage('Build image') {         
		steps {
			   bash '''
				  docker-compose build
			   ''
			}     
	   }     
	 
	   stage('Push image') {
			steps {
			   bash '''
				  aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 399155979869.dkr.ecr.us-east-1.amazonaws.com
				  docker-compose push
			   ''
			}       
	   }

  }
}

	
