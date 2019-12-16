pipeline {
    stages {
        stage (‘Checkout’){
            checkout scm
        }

        stage (‘Test Ui’){
            dir(“Poc-Automation_Web”) {
                sh '''
                    ./gradlew clean test --info
                '''
            }
        }
    }
}