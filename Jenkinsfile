node {
    stage (‘SCM checkout’){
        git scm
    }
    stage (‘Test UI’){
        dir(“Poc-Automation_Web”) {
            sh '''
                ./gradlew clean
                ./gradlew build
            '''
        }
    }
}