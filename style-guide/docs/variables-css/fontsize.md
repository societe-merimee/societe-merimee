---
title: Tailles de police
---

# Tailles de police

Les tailles d'écriture sont générés à l'aide de [utopia](https://utopia.fyi/) et sont coordonés avec les espacements. Les noms des propriétés css suivent la nomenclature suivante : `--font-size-ECHELLE`. Ainsi, `var(--font-size-0)` renverra la valeur : `{{tokens.size['font-size']['0'].value}}`. Les valeurs css utilisent `clamp` et `vw` ce qui permet d'obtenir une taille de police plus cohérente et plus adaptée à chaque appareil et chaque écran.

| ECHELLE | exemple                                                                                                                                          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| -2      | <div style="font-size:{{tokens.size['font-size']['-2'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div> |
| -1      | <div style="font-size:{{tokens.size['font-size']['-1'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div> |
| 0       | <div style="font-size:{{tokens.size['font-size']['0'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div>  |
| 1       | <div style="font-size:{{tokens.size['font-size']['1'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div>  |
| 2       | <div style="font-size:{{tokens.size['font-size']['2'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div>  |
| 3       | <div style="font-size:{{tokens.size['font-size']['3'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div>  |
| 4       | <div style="font-size:{{tokens.size['font-size']['4'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div>  |
| 5       | <div style="font-size:{{tokens.size['font-size']['5'].value}}">Le monde est plein de choses inutiles qui seules donnent du prix à la vie.</div>  |
