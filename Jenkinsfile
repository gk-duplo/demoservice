node {    
      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }     
      stage('Build image') {         
        steps {
               bash '''
                  #!/bin/bash
                  docker-compose build
               ''
            }     
       }     
     
       stage('Push image') {
            steps {
               bash '''
                  #!/bin/bash
                  aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 399155979869.dkr.ecr.us-east-1.amazonaws.com
                  docker-compose push
               ''
            }       
       }
}
