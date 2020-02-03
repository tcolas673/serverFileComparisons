# importing my http library to create server for communication
import http.server
import socketserver

# setting up my port that app will run on
PORT = 8000

# set up a request handler to handle traffic 
Handler = http.server.SimpleHTTPRequestHandler

# acutally start up my server
# have my server handle communication at this port
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()