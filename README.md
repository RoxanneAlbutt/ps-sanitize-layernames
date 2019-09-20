# Photoshop - Sanitize Layer Names

### Install

1. Download [santize-layernames.zip](https://github.com/RoxanneAlbutt/ps-layers-to-spritesheet/blob/master/layers-to-spritesheet.zip?raw=true)
2. Place `santize-layernames.jsx` in the Photoshop Scripts folder.
	- OS X: `/Applications/[Photoshop]/Presets/Scripts/`
	- Windows: `C:\[Program Files]\Adobe\[Photoshop]\Presets\Scripts`
4. Restart Photoshop. The script should now be available in `File ▸ Scripts ▸ santize-layernames`.

### Usage
Removes all filename friendly characters from layernames. This makes it easier when batch saving all layers.
Characters not removed are: a-z, 0-9 and -
You can customize which letters to keep/remove by editing the regex variable in the script.


### License
Copyright © 2019 Roxanne Albutt 

Layers to Spritesheet is licensed under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
