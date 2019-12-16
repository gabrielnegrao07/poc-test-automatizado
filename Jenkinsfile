pipeline {
    agent any

    stages {
        stage (‘Checkout’){
            steps {
                checkout scm
            }
        }

        stage (‘TestUi’){
            steps {
                sh '''
                    ./gradlew clean test --info
                '''
            }
        }
    }
}