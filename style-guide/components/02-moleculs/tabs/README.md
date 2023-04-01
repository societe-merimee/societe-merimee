Le composant expose l'attribut et la propriété `activetab` qui permettent d'avoir et de régler l'index de l'onglet courant.

Dans l'exemple suivant l'onglet actif sera le troisième (en partant de zéro)

```html
<nav-tabs activetab="2">
	<!-- ... -->
</nav-tabs>
```

```js
console.log(navTabElement.activetab) // 2
navTabElement.activeTab = 0 //définit l'onglet actif comme l'onglet 0
```

Tout enfant direct est considéré comme un onglet. L'attribut `data-label` permet d'attribuer un nom aux onglets. Lorsque `data-label` n'est pas défini l'onglet porte le nom `Tab [INDEX]`.
