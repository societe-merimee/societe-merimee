---
title: Espacements
---

# Espacements

Les espacements sont générés à l'aide de [utopia](https://utopia.fyi/) et sont coordonés avec les tailles de polices. Les noms des propriétés css suivent la nomenclature suivante : `--space-ECHELLE`. Ainsi, `var(--space-0)` renverra la valeur : `{{tokens.size.space['0'].value}}`. Les valeurs css utilisent `clamp` et `vw` ce qui permet d'obtenir des espacements plus cohérents et plus adaptés à chaque appareil et chaque écran.

| ECHELLE | exemple                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| -3      | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['-3'].value}}; width:{{tokens.size.space['-3'].value}};"></div> |
| -1      | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['-2'].value}}; width:{{tokens.size.space['-2'].value}};"></div> |
| -2      | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['-1'].value}}; width:{{tokens.size.space['-1'].value}};"></div> |
| 0       | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['0'].value}};; width:{{tokens.size.space['0'].value}};"></div>  |
| 1       | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['1'].value}};; width:{{tokens.size.space['1'].value}};"></div>  |
| 2       | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['2'].value}};; width:{{tokens.size.space['2'].value}};"></div>  |
| 3       | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['3'].value}};; width:{{tokens.size.space['3'].value}};"></div>  |
| 4       | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['4'].value}};; width:{{tokens.size.space['4'].value}};"></div>  |
| 5       | <div style="background:hsl(309 38% 75%); height:{{tokens.size.space['5'].value}};; width:{{tokens.size.space['5'].value}};"></div>  |
