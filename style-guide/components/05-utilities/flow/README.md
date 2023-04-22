## variables css

-   `--flow-space`

Le layout `flow` assure la fluidité et le rythme entre les éléments.

Lorsque `--flow-space` n'est pas défini : la valeur par défaut est 1em, ce qui correspond à la taille de la police de l'élément concerné.

Vous pouvez également utiliser les classes utilitaires "flow-space" qui vous permettent d'utiliser les variables d'espacement. Par exemple, si vous souhaitez que le dernier élément ait un espacement de taille 2, vous devez modifier le code comme suit :

```html
<div class="flow">
	<div class="item">Item 1</div>
	<div class="item">Item 2</div>
	<div class="item flow-space-2">Item 3</div>
</div>
```
