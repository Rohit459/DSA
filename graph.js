class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(value) {
        if(!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
            return true;
        }
        return false
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true
        }
        return false
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
            return true
        }
        return false;
    }

    // removeVertex(vertex) {
    //     if(!this.adjacencyList[vertex]) return false
    //     let length = this.adjacencyList[vertex].length - 1
    //     while(length>=0) {
    //         this.removeEdge(vertex, this.adjacencyList[vertex][length]);
    //         length--;
    //     }
    //     delete this.adjacencyList[vertex];
    //     return true;
    // }


    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return false
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, temp);
        }
        delete this.adjacencyList[vertex];
        return true;
    }
}