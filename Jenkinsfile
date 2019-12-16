pipeline {
    agent any

    stages {
        stage ('Checkout source') {
            steps {
                checkout scm
            }
        }

        stage ('Test Front'){
            steps {
                sh '''
                    ./gradlew clean test --info
                '''
            }
        }
    }

    post {
        failure {
            //sendMsgToSlack("não finalizado os testes de API :sadparrot:")
        }

        success {
            //sendMsgToSlack("finalizado os testes! :balloon:")
        }

        always {
            deleteDir()
        }
    }
}