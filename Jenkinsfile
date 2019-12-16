pipeline {
    agent {
        label any
    }

    stages {
        stage (‘Checkout’){
            steps {
                checkout scm
            }
        }

        stage (‘TestUi’){
            steps {
                dir(“Poc-Automation_Web”) {
                    sh '''
                        ./gradlew clean test --info
                    '''
                }
            }
        }
    }
}