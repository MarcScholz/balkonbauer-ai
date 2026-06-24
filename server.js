const http = require('http');
const url = require('url');

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const {key, message} = JSON.parse(body);
        if (!key || !message) {
          res.writeHead(400);
          res.end(JSON.stringify({error: 'Missing fields'}));
          return;
        }

        const kb = "G&S die balkonbauer - Seit über 25 Jahren. 40.000+ Balkone gebaut. Kontakt: 02382 98973-0";
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-opus-4-6',
            max_tokens: 500,
            system: `Du bist Assistent für G&S die balkonbauer. Antworte NUR basierend auf: ${kb}. Wenn nicht möglich: "Kontaktiere: 02382 98973-0"`,
            messages: [{role: 'user', content: message}]
          })
        });

        const data = await response.json();
        res.writeHead(response.status);
        res.end(JSON.stringify(data));
      } catch(e) {
        res.writeHead(500);
        res.end(JSON.stringify({error: e.message}));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({error: 'Not found'}));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
