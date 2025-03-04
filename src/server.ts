import http from 'http'

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    // Home Route
    if (request.url === "/" && request.method === "GET") {
        response.writeHead(200, {"Content-Type" : "text/html"})
        response.end("<h1>Home</h1>")
        return
    }

    if (request.url === "/about") {
        response.writeHead(200, {"Content-Type" : "text/html"})
        response.end("<h1>About</h1>")
        return
    }

    
    if (request.url === "/my-account") {
        response.writeHead(200, {"Content-Type" : "text/html"})
        response.end("<h1>My Account</h1>")
        return
    }

    if (request.url === "/new-page") {
        response.writeHead(200, {"Content-Type" : "text/html"})
        response.end("<h1>New page :)</h1>")
        return
    }
    // this response is the else return of all of the others if conditions
    response.writeHead(404, {"Content-Type" : "text/plain"})
    response.end("Page not found :(")
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})