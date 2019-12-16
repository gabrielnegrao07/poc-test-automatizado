node {
    stage (‘SCM checkout’) {
        git scm
    }

    stage (‘Build’) {
        dir(“Poc-Automacao_Web”) {
            sh “mvn clean install”
        }

        dir(“comtest/target”) {
            sh “java -jar com.test-1.0-SNAPSHOT.jar”
        }
    }
}