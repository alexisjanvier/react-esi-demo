Ce dépôt contient le code de démo de l'article de blog "Gérer des ESI avec Next.js".

## Installer le demo

### Prérequis

Tout d'abord, la démo est prévue pour être lancée localement en https sur l'url `https://react-esi.local`. Vous devrez donc :

- ajouter l'entrée `127.0.0.1 react-esi.local` à votre `/etc/host`
- installer mkcert (voir [instructions](https://github.com/FiloSottile/mkcert#installation)) pour pouvoir générer un certificat.

Enfin, l'environnement de démo utilise [Docker](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/). Vous devez donc les avoir installés sur votre environnement.

### Installation

Vous devez tout d'abord générer le certificat pour le https:

```bash
make create-cert
```

Puis installer les dépendances:

```bash
make install
```

## L'environnement de développement

Vous pouvez lancer l'environnement de développement avec la recette :

```bash
make start
```

Le site est alors accessible sur https://react-esi.local

Cet environnement va vous permettre de tester la mise en place de vos propres fragments ESI.

Mais cet environnement ne comporte pas de serveur de cache http (Varnish), et ne permet donc pas de tester le fonctionnement final. Pour cela, vous devrez utiliser l'environnement de production.


## L'environnement de production

Cet environnement possède un serveur de cache http (Varnish) et va donc permettre de tester les fragments ESI.

Il faut tout d'abord lancer le build de production : 

```bash
make build
```

Puis les serveurs de production :

```bash
make production-start
```

Le site avec le cache http est accessible sur https://react-esi.local

Vous pouvez aussi visualiser le code généré par Next.js (avant Varnish) sur l'url http://localhost:3000

