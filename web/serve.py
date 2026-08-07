import http.server
import os
import socketserver

PORT = 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_GET(self):
        path = self.path.split('?')[0]
        file_path = os.path.join(ROOT, path.lstrip('/'))
        if path == '/' or not os.path.isfile(file_path):
            self.path = '/index.html'
        return super().do_GET()


class ThreadingTCPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True


if __name__ == '__main__':
    handler = SPAHandler
    with ThreadingTCPServer(('', PORT), handler) as httpd:
        print(f'Serving SPA on http://localhost:{PORT}')
        httpd.serve_forever()
