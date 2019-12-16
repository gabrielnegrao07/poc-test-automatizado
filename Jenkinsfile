node {
    stage (‘SCM’){
        git scm
    }
    stage (‘TestUI’){
        dir(“Poc-Automation_Web”) {
            sh '''
                ./gradlew clean
                ./gradlew build
            '''
        }
    }
}