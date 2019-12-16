pipeline {
    agent any

    stages {
        stage ('Checkout source') {
            steps {
                checkout scm
            }
        }

        stage ('Test Front') {
            steps {
                sh '''
                    ./gradlew clean test --info
                '''
            }
        }
    }

    post {
        failure {
            steps {
                //sendMsgToSlack("testes não finalizado com sucesso! :segundou:")
            }
        }

        success {
            steps {
                //sendMsgToSlack("testes finalizado com sucesso! :sextou:")
            }
        }

        always {
            deleteDir()
        }
    }
}

def sendMsgToSlack(message) {
    def slackMessage = "<!here> (<${getJobUrl()}|${env.JOB_NAME}>): " + message
    sendMsgToSlack('#team_channel', slackMessage)
}

def sendMsgToSlack(channel, message) {
    build job: 'send-msg-slack', parameters: [
            string(name: 'CHANNEL', value: channel),
            string(name: 'MESSAGE', value: message)
    ], quietPeriod: 3
}