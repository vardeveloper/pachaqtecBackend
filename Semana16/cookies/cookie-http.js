const http = require('http');

// Función para establecer una cookie
function setCookie(res, name, value, maxAge) {
    const cookie = `${name}=${value}; Max-Age=${maxAge}`;
    res.setHeader('Set-Cookie', cookie);
}

// Función para obtener el valor de una cookie
function getCookie(req, name) {
    const cookieHeader = req.headers.cookie;
    if (cookieHeader) {
        const cookies = cookieHeader.split(';');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
    }
    return null;
}

const server = http.createServer((req, res) => {
    if (req.url === '/setcookie') {
        // Max-Age de 900 segundos (15 minutos)
        setCookie(res, 'miCookie', 'Hola, esta es una cookie', 900);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Cookie creada. Visita /getcookie para ver la cookie.');
    } else if (req.url === '/getcookie') {
        const miCookieValue = getCookie(req, 'miCookie');
        if (miCookieValue) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Valor de la cookie "miCookie": ${miCookieValue}`);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('La cookie "miCookie" no existe.');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada.');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
