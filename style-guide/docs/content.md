---
label: Contenu
---

Le contenu du site est géré à partir de fichiers markdown ou json qui sont modifiables à l'aide de [decap cms](https://decapcms.org/)

Le contenu est réparti en trois catégories :

-   [Pages](#pages)
    -   [Accueil](accueil)
    -   [Biographie](biographie)
-   [Blog](#blog)
-   [Listes](#listes)
    -   [Actualités](#actualités)
    -   [Cahiers](#cahiers)
    -   [Séminaires](#séminaires)
    -   [Œuvres](#œuvres)
    -   [Études critiques](#études-critiques)

## Pages

Les `pages` sont gérées par des fichiers markdown qui peuvent éventuellement contenir des informations via un frontmatter.

Elles sont situées dans le dossier `content/pages/`

### Accueil

**chemin** : `content/pages/home.md`

Le fichier **home.md** permet d'administrer la description de la société utilisée sur la page d'accueil.
Aucun frontmatter n'est fourni.

### Biographie

**chemin** : `content/pages/biography.md`

Le fichier **biography.md** permet d'administrer le contenu de la page biographie.

| clé     | type de valeur | utilisation                           | exemple                      |
| ------- | -------------- | ------------------------------------- | ---------------------------- |
| picture | `string`       | image utilisée dans la section `hero` | /images/uploads/portrait.png |

## Blog

**chemin** : `content/blog/jour-mois-année-titre.md`

`Blog` est une collection de fichiers correspondant à des articles.

Chaque article est composé d'un corps en markdown et d'un `frontmatter`. Le contenu du `frontmatter` est le suivant.

| clé       | type de valeur               | utilisation                                             | exemple                                                                |
| --------- | ---------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| title     | `string`                     | titre de l'article                                      | premier article                                                        |
| category  | `string`                     | définit la catégorie dans laquelle apparaîtra l'article | adaptations                                                            |
| date      | `date`                       | permet de trier les articles par ordre chronologiques   | 2023-04-17T13:58:36.695Z                                               |
| thumbnail | alt:`string`, image:`string` | image de couverture de l'article                        | **alt**:une fausse image, **image**:/images/uploads/imgplaceholder.png |

## Listes

**chemin** : `content/listes/*.json`

`Les listes` sont gérées par des fichiers json et correspondent à des ensembles de données qui partagent le même format.

### Actualités

**chemin** : `content/listes/news.json`

Les `actualités` sont les informations données sur la page d'accueil, après la présentation de la fondation.

| clé         | type de valeur                          | utilisation                        | exemple                                                                |
| ----------- | --------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| title       | `string`                                | titre de l'actualité               | séminaire sur Lorem Ipsum                                              |
| thumbnail   | alt:`string`, image:`string` (optionel) | image de couverture de l'actualité | **alt**:une fausse image, **image**:/images/uploads/imgplaceholder.png |
| date        | `date`                                  | Date de l'évènement                | 2023-04-17T13:58:36.695Z                                               |
| description | `markdown`                              | texte riche qui décrit l'actualité | ...                                                                    |

### Cahiers

**chemin** : `content/listes/cahiers.json`

Les `cahiers` sont listés dans ce fichier `json` et sont affichés sur la page cahiers.

| clé         | type de valeur | utilisation                 | exemple                                                             |
| ----------- | -------------- | --------------------------- | ------------------------------------------------------------------- |
| title       | `string`       | titre du cahier             | cahier n°11                                                         |
| description | `markdown`     | sommaire du cahier          | ...                                                                 |
| url         | `string`       | Lien pour acheter le cahier | https://classiques-garnier.com/cahiers-merimee-2019-n-11-varia.html |

### Séminaires

**chemin** : `content/lists/seminars.json`

Les `séminaires` sont listés dans ce fichier `json` et sont affichés sur la page séminaires.

| clé         | type de valeur | utilisation            | exemple                    |
| ----------- | -------------- | ---------------------- | -------------------------- |
| title       | `string`       | titre du cahier        | Séminaire de novembre 2016 |
| date        | `date`         | date du séminaire      | 2023-04-17T13:58:36.695Z   |
| description | `markdown`     | Programme du séminaire | ...                        |

### Œuvres

**chemin** : `content/lists/works-bibliography.json`

Les œuvres sont listés dans ce fichier `json` et sont affichés sur la page bibliographie.

| clé                           | type de valeur | utilisation                   | exemple            |
| ----------------------------- | -------------- | ----------------------------- | ------------------ |
| title1                        | `string`       | titre principal               | Mateo Falcone      |
| title2 (facultatif)           | `string`       | titre secondaire              | Mosaïque           |
| location (facultatif)         | `string`       | lieu d'édition                | Paris              |
| editor                        | `string`       | nom de l'éditeur              | La revue française |
| date                          | `string`       | date de parution              | 1837 3             |
| scientificEditor (facultatif) | `string`       | nom de l'éditeur scientifique | OBERSON Jacques    |

### Études critiques

**chemin** : `content/lists/critical-bibliography.json`

Les études critiques sont listées dans ce fichier `json` et sont affichés sur la page bibliographie.

| clé                   | type de valeur | utilisation      | exemple                                                          |
| --------------------- | -------------- | ---------------- | ---------------------------------------------------------------- |
| author                | `string`       | auteur           | ANDREU MIRALLES Xavie                                            |
| title1                | `string`       | titre principal  | El descubrimiento de Esoaña. Mito romāntico e identical nacional |
| title2 (facultatif)   | `string`       | titre secondaire | Forum for Modern Language Studies vol. 35                        |
| location (facultatif) | `string`       | lieu d'édition   | Paris                                                            |
| editor                | `string`       | nom de l'éditeur | Hachette                                                         |
| date                  | `string`       | date de parution | 1837                                                             |
