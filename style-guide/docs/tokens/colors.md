---
label: Couleurs
---

# Couleurs

La palette est composée de deux teintes (accent et neutral), pour chacune des teintes il existe 12 variations qui correspondent chacune à un cas d'utilisation.
Les variables sont nommées comme suit : `--clr-TEINTE-NOM`. Ainsi, `var(--clr-accent-surface-solid)` correspond à `hsl({{tokens.color.accent['9'].value}})`. Il est également possible d'accéder à la valeur brute d'une couleur en remplaçant `clr` par `raw` par exemple : `var(--raw-accent-surface-solid)` correspond à `{{tokens.color.accent['9'].value}}`. Les couleurs proviennent du système de couleur open-source designé par radix ui. [source](https://www.radix-ui.com/colors)

| Accent                                                                                                  | Neutral                                                                                                  | nom                 |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------- |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['1'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['1'].value}})">&nbsp;</div>  | surface-app         |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['2'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['2'].value}})">&nbsp;</div>  | surface-subtle      |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['3'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['3'].value}})">&nbsp;</div>  | surface-ui          |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['4'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['4'].value}})">&nbsp;</div>  | surface-ui-hover    |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['5'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['5'].value}})">&nbsp;</div>  | surface-ui-active   |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['6'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['6'].value}})">&nbsp;</div>  | border-subtle       |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['7'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['7'].value}})">&nbsp;</div>  | border-ui           |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['8'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['8'].value}})">&nbsp;</div>  | border-ui-hover     |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['9'].value}})">&nbsp;</div>  | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['9'].value}})">&nbsp;</div>  | surface-solid       |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['10'].value}})">&nbsp;</div> | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['10'].value}})">&nbsp;</div> | surface-solid-hover |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['11'].value}})">&nbsp;</div> | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['11'].value}})">&nbsp;</div> | text-shade          |
| <div style="outline: 1px solid black; background:hsl({{tokens.color.accent['12'].value}})">&nbsp;</div> | <div style="outline: 1px solid black; background:hsl({{tokens.color.neutral['12'].value}})">&nbsp;</div> | text                |
