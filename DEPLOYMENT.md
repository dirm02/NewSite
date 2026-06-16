# Lif3line Deployment

Production VM:

- Host: `146.190.240.66`
- Web root: `/var/www/lif3line.me/current`
- Nginx config: `/etc/nginx/sites-available/lif3line.me`

Build locally:

```bash
npm ci
npm run build
```

Deploy static build:

```bash
scp -r dist/* root@146.190.240.66:/var/www/lif3line.me/current/
```

Cloudflare DNS:

- `A lif3line.me 146.190.240.66`
- `A www 146.190.240.66`

TLS is issued on the VM with Certbot:

```bash
sudo certbot --nginx -d lif3line.me -d www.lif3line.me --redirect
```

Renewal is handled by the systemd `certbot.timer`.
