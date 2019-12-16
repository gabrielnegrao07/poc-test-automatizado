pipeline {
    stages {
        stage (‘Checkout’){
            checkout scm
        }

        stage (‘TestUi’){
            dir(“Poc-Automation_Web”) {
                sh '''
                    ./gradlew clean test --info
                '''
            }
        }
    }
}