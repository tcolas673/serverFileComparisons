// the go thing is so cute

package main

// importing my http library + others to create server for communication
import (
	"fmt"
	"net/http"
)
// set up a request handler to handle traffic it'll take in requests and return a response
func hello(w http.ResponseWriter, req *http.Request){
	fmt.Fprintf(w, "hello\n")
}
// set up a request handler to handle traffic it'll take in requests and return a response
func headers(w http.ResponseWriter, req *http.Request){

	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

func main() {
	// attaching handler to appropriate endpoint
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/headers", headers)

	// have my server handle communication at this port
	http.ListenAndServe(":8090", nil)
}                        