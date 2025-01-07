# Playwright Project

## Description
Ce projet utilise Playwright pour automatiser les tests de bout en bout d'une application web. 

Il inclut des tests pour vérifier diverses fonctionnalités telles que la recherche de produits, l'ajout de produits au panier.



## Installation
1. Clonez le dépôt :
    ```sh
    git clone <URL_DU_DEPOT>
    ```
2. Installez les dépendances :
    ```sh
    npm install
    ```

## Utilisation
### Exécuter les tests
Pour exécuter les tests, utilisez la commande suivante :
```sh
npx playwright test
```


### Générer un rapport
Après avoir exécuté les tests, vous pouvez générer un rapport HTML :
```sh
npx playwright show-report
```

### Prendre des captures d'écran
Les captures d'écran sont enregistrées dans le dossier screenshots après l'exécution des tests.

### Configuration
La configuration de Playwright se trouve dans le fichier playwright.config.ts. Vous pouvez y définir les paramètres globaux pour les tests, tels que l'URL de base, les navigateurs à utiliser, etc.

### Page Objects
Les objets de page sont définis dans le dossier page_objects. Chaque fichier représente une page ou un composant de l'application et contient des méthodes pour interagir avec les éléments de la page.

### Tests
Les tests sont organisés dans les dossiers tests et tests-examples. Chaque fichier de test contient des scénarios de test spécifiques.